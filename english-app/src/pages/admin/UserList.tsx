import React, { useCallback, useEffect, useState } from "react";
import apiClient from "@/api";
import { Pagination } from "@/components/common/Pagination";
import { crossPlatformAlert } from "@/utils/crossPlatformAlert";
import { useUserStore } from "@/store/userStore";

const ITEMS_PER_PAGE = 15;
type UserRole = 'STUDENT' | 'TEACHER' | 'ADMIN';
type FilterRole = 'ALL' | UserRole;
type SearchType = 'loginId' | 'username';

// 💡 [추가] 상태 및 강사 검색을 위한 타입 정의
type FilterStatus = 'ALL' | 'ACTIVE' | 'INACTIVE' | 'PENDING';

interface PendingUser {
    userId: number;
    loginId: string;
    username: string;
    createdAt: string;
    role: UserRole;
    status: string;
    isDeleted: number;
    schoolLevel: string;
    grade: number;
    userGubun: string;
    registration: number;
    learningStatus: string;
    teacherId?: number | string;
}

const MOCK_TEACHERS = [
    { id: 1, name: "김민준" }, { id: 2, name: "이서연" }, { id: 3, name: "박지민" },
    { id: 4, name: "최수현" }, { id: 5, name: "정우성" }, { id: 6, name: "강호동" },
    { id: 7, name: "유재석" }, { id: 8, name: "한소희" }, { id: 9, name: "신동엽" },
    { id: 10, name: "송혜교" },
];

const UserList = () => {
    const { user } = useUserStore();
    const currentAdminRole = user?.role?.trim().toUpperCase();
    const isAdmin = currentAdminRole === 'ADMIN';

    const [allPendingUsers, setAllPendingUsers] = useState<PendingUser[]>([]);
    const [displayedUsers, setDisplayedUsers] = useState<PendingUser[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRoles, setSelectedRoles] = useState<{ [key: number]: UserRole }>({});

    // 🔍 검색/필터용 State 들
    const [roleFilter, setRoleFilter] = useState<FilterRole>('ALL');
    const [statusFilter, setStatusFilter] = useState<FilterStatus>('ALL'); // 💡 [추가] 회원 상태 검색 조건
    const [teacherFilter, setTeacherFilter] = useState<string>('ALL');     // 💡 [추가] 배정 강사 검색 조건
    const [searchType, setSearchType] = useState<SearchType>('username');
    const [searchKeyword, setSearchKeyword] = useState("");

    const [filteredUsers, setFilteredUsers] = useState<PendingUser[]>([]);
    const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);

    // 테이블 행 내부 Select 상자 매핑용 실시간 동기화 데이터 상태
    const [selectedTeachers, setSelectedTeachers] = useState<{ [key: string]: string }>({});
    const [selectedStatuses, setSelectedStatuses] = useState<{ [key: string]: string }>({});

    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [targetUser, setTargetUser] = useState<{ userId: number; rowKey: string; username: string; infoText: string } | null>(null);

    const formatSchoolAndGrade = (schoolLevel: string, grade: number | null | undefined): string => {
        if (!schoolLevel && !grade) return '-';
        let levelText = '';
        switch (schoolLevel?.toLowerCase()) {
            case 'elementary': levelText = '초등'; break;
            case 'middle': levelText = '중등'; break;
            case 'high': levelText = '고등'; break;
            default: levelText = '';
        }
        const gradeText = grade ? ` ${grade}학년` : '';
        return `${levelText}${gradeText}`.trim() || '-';
    };

    const fetchPendingUsers = useCallback(async () => {
        try {
            const response = await apiClient.get<PendingUser[]>('/api/admin/users/all');
            const allUsers = response.data;

            if (!allUsers || allUsers.length === 0) {
                console.warn("⚠️ [경고] 서버에서 빈 배열([])을 보냈습니다.");
            }

            const activeUsers = allUsers.filter(u => u.isDeleted !== 1 && u.status !== 'DELETED');

            setAllPendingUsers(activeUsers);
            setFilteredUsers(activeUsers);

            const initialRoles: { [key: number]: UserRole } = {};
            const initialTeachers: { [key: string]: string } = {};
            const initialStatuses: { [key: string]: string } = {};

            activeUsers.forEach((user, index) => {
                const actualId = user.userId || (user as any).id;
                initialRoles[actualId] = user.role || 'STUDENT';
                const rowKey = actualId ? String(actualId) : `user-${index}-${user.loginId}`;
                initialTeachers[rowKey] = user.teacherId ? String(user.teacherId) : '미지정';
                initialStatuses[rowKey] = user.status || 'PENDING';
            });

            setSelectedRoles(initialRoles);
            setSelectedTeachers(initialTeachers);
            setSelectedStatuses(initialStatuses);
            console.log("🎯 [상태 초기화 완료] 정상 회원 리스트 구성 완료.");

        } catch (error: any) {
            console.error("❌ 백엔드 통신 실패:", error);
        }
    }, []);

    useEffect(() => {
        fetchPendingUsers();
    }, [fetchPendingUsers]);

    // 🎯 [수정 및 보완] 복합 다중 필터 기능 연동 완료
    const handleSearch = () => {
        let result = [...allPendingUsers];

        // 1. 회원분류 필터링
        if (roleFilter !== 'ALL') {
            result = result.filter(user => user.role === roleFilter);
        }

        // 2. 회원 상태 필터링 (💡 추가)
        if (statusFilter !== 'ALL') {
            result = result.filter(user => {
                const actualId = user.userId || (user as any).id;
                const currentStatus = selectedStatuses[String(actualId)] || user.status || 'PENDING';
                return currentStatus.toUpperCase() === statusFilter;
            });
        }

        // 3. 배정 강사 필터링 (💡 추가)
        if (teacherFilter !== 'ALL') {
            result = result.filter(user => {
                const actualId = user.userId || (user as any).id;
                const currentTeacher = selectedTeachers[String(actualId)] || user.teacherId || '미지정';
                return currentTeacher === teacherFilter;
            });
        }

        // 4. 아이디 / 회원명 검색 키워드 필터링
        if (searchKeyword.trim()) {
            result = result.filter(user => {
                const targetValue = user[searchType];
                return targetValue?.toLowerCase().includes(searchKeyword.toLowerCase());
            });
        }

        setFilteredUsers(result);
        setCurrentPage(1);
        setSelectedUserIds([]);
    };

    useEffect(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setDisplayedUsers(filteredUsers.slice(startIndex, endIndex));
        setSelectedUserIds([]);
    }, [filteredUsers, currentPage]);

    const handleTeacherChange = async (userId: number, rowKey: string, teacherName: string) => {
        if (!isAdmin || isUpdating) return;
        if (!userId) {
            crossPlatformAlert("오류", "유저 식별 번호가 올바르지 않습니다.");
            return;
        }
        const previousTeacher = selectedTeachers[rowKey] || '미지정';
        setSelectedTeachers(prev => ({ ...prev, [rowKey]: teacherName }));
        setIsUpdating(true);
        try {
            await apiClient.patch(`/api/admin/users/${userId}/teacher`, {
                teacherId: teacherName === '미지정' ? null : teacherName
            });
        } catch (error) {
            console.error(error);
            setSelectedTeachers(prev => ({ ...prev, [rowKey]: previousTeacher }));
        } finally {
            setIsUpdating(false);
        }
    };

    const handleStatusChange = async (userId: number, rowKey: string, statusValue: string) => {
        if (!isAdmin || isUpdating) return;
        if (!userId) {
            crossPlatformAlert("오류", "유저 식별 번호가 올바르지 않습니다.");
            return;
        }
        const previousStatus = selectedStatuses[rowKey] || 'PENDING';

        setSelectedStatuses(prev => ({ ...prev, [rowKey]: statusValue }));
        setIsUpdating(true);

        try {
            await apiClient.patch(`/api/admin/users/${userId}/status`, { status: statusValue });
        } catch (error: any) {
            setSelectedStatuses(prev => ({ ...prev, [rowKey]: previousStatus }));
        } finally {
            setIsUpdating(false);
        }
    };

    const handleOpenWithdrawModal = (item: PendingUser, rowKey: string) => {
        const actualUserId = item.userId || (item as any).id;
        const infoText = formatSchoolAndGrade(item.schoolLevel, item.grade);
        setTargetUser({
            userId: actualUserId,
            rowKey,
            username: item.username || '이름 없음',
            infoText: infoText
        });
        setIsModalOpen(true);
    };

    const handleConfirmWithdraw = async () => {
        if (!targetUser || !isAdmin || isUpdating) return;
        const { userId, rowKey } = targetUser;

        setIsUpdating(true);
        setIsModalOpen(false);

        try {
            await apiClient.post(`/api/admin/users/withdraw`, { userId: userId });
            const updatedAllUsers = allPendingUsers.filter(u => {
                const actualId = u.userId || (u as any).id;
                return String(actualId) !== String(userId);
            });
            setAllPendingUsers(updatedAllUsers);

            const updatedFilteredUsers = filteredUsers.filter(u => {
                const actualId = u.userId || (u as any).id;
                return String(actualId) !== String(userId);
            });

            const maxPage = Math.max(1, Math.ceil(updatedFilteredUsers.length / ITEMS_PER_PAGE));
            if (currentPage > maxPage) {
                setCurrentPage(maxPage);
            }

            setFilteredUsers(updatedFilteredUsers);

            setSelectedStatuses(prev => {
                const next = { ...prev };
                delete next[rowKey];
                return next;
            });
            setSelectedTeachers(prev => {
                const next = { ...prev };
                delete next[rowKey];
                return next;
            });

            crossPlatformAlert("성공", "회원이 정상적으로 탈퇴 처리되었습니다.");

        } catch (error: any) {
            console.error("❌ 백엔드 탈퇴 요청 실패:", error);
            const errorMsg = error?.response?.data?.message || "서버 통신에 실패했습니다. 다시 시도해 주세요.";
            crossPlatformAlert("오류", errorMsg);
        } finally {
            setIsUpdating(false);
            setTargetUser(null);
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status?.toUpperCase()) {
            case 'ACTIVE': return '정회원';
            case 'INACTIVE': return '휴면';
            case 'DELETED': return '탈퇴완료';
            default: return '미지정';
        }
    };

    return (
        <div className="bg-white w-full max-w-[1400px] mx-auto p-5 rounded-lg shadow-sm min-h-full flex flex-col gap-4">

            {/* 🎯 [디자인 개선] 다중 다각도 필터 적용 검색 바 구성 */}
            <div className="flex flex-wrap items-center bg-gray-50 p-3.5 rounded-md border border-gray-200 gap-4">
                <div className="flex flex-wrap items-center gap-5">
                    {/* 1. 회원분류 */}
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-sm font-bold text-gray-700 whitespace-nowrap">회원분류</span>
                        <select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value as FilterRole)}
                            className="border border-gray-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-blue-500 cursor-pointer"
                        >
                            <option value="ALL">전체</option>
                            <option value="STUDENT">학생</option>
                            <option value="TEACHER">강사</option>
                            <option value="ADMIN">관리자</option>
                        </select>
                    </div>

                    {/* 2. 회원 상태 필터 (💡 UI 추가) */}
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-sm font-bold text-gray-700 whitespace-nowrap">회원상태</span>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value as FilterStatus)}
                            className="border border-gray-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-blue-500 cursor-pointer"
                        >
                            <option value="ALL">전체</option>
                            <option value="PENDING">미지정</option>
                            <option value="ACTIVE">정회원</option>
                            <option value="INACTIVE">휴면</option>
                        </select>
                    </div>

                    {/* 3. 배정강사 필터 (💡 UI 추가) */}
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-sm font-bold text-gray-700 whitespace-nowrap">배정강사</span>
                        <select
                            value={teacherFilter}
                            onChange={(e) => setTeacherFilter(e.target.value)}
                            className="border border-gray-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-blue-500 cursor-pointer"
                        >
                            <option value="ALL">전체 강사</option>
                            <option value="미지정">미지정</option>
                            {MOCK_TEACHERS.map((t) => (
                                <option key={t.id} value={t.name}>{t.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* 4. 텍스트 직접 조건 검색 */}
                    <div className="flex flex-row items-center gap-2 border-l border-gray-300 pl-4">
                        <select
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value as SearchType)}
                            className="border border-gray-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-blue-500 cursor-pointer"
                        >
                            <option value="loginId">아이디</option>
                            <option value="username">회원명</option>
                        </select>
                        <input
                            type="text"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder="검색어를 입력하세요"
                            className="border border-gray-300 rounded px-2.5 py-1 text-sm bg-white outline-none focus:border-blue-500 w-48"
                            disabled={isUpdating}
                        />
                    </div>
                </div>

                {/* 검색 실행 버튼 */}
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-1.5 rounded transition-colors shadow-sm shrink-0"
                >
                    검색
                </button>
            </div>

            {/* 테이블 레이아웃 */}
            <div className="flex flex-col border border-gray-200 rounded-md overflow-hidden shadow-sm w-full relative">
                <div
                    className="flex flex-row bg-gray-50 border-b border-gray-200 py-2 px-1 font-bold text-gray-700 text-sm text-center justify-between items-center w-full">
                    <div className="w-12 shrink-0">No</div>
                    <div className="w-[18%] shrink-0 px-1">회원 아이디</div>
                    <div className="w-[12%] shrink-0 px-1">회원 이름</div>
                    <div className="w-[12%] shrink-0 px-1">학년/학교급</div>
                    <div className="w-[15%] shrink-0 px-1">배정 강사</div>
                    <div className="w-[12%] shrink-0 px-1">회원 상태</div>
                    <div className="w-[13%] shrink-0 px-1">등록일</div>
                    {isAdmin && <div className="w-[10%] shrink-0 px-1">관리</div>}
                </div>

                <div className="flex flex-col divide-y divide-gray-100 overflow-y-auto text-xs text-gray-600 w-full">
                    {displayedUsers.length === 0 ? (
                        <div className="p-14 text-center text-gray-400 font-medium bg-white w-full">조회된 회원이 없습니다.</div>
                    ) : (
                        displayedUsers.map((item, index) => {
                            const actualUserId = item.userId || (item as any).id;
                            const currentKey = actualUserId ? String(actualUserId) : `user-${index}-${item.loginId}`;
                            const currentTeacherName = selectedTeachers[currentKey] || '미지정';
                            const currentStatus = selectedStatuses[currentKey] || 'PENDING';

                            return (
                                <div key={currentKey}
                                     className="flex flex-row py-2 px-1 text-center justify-between items-center bg-white hover:bg-gray-50/80 transition-colors w-full">
                                    <div
                                        className="w-12 shrink-0 text-gray-400 font-mono">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</div>
                                    <div className="w-[18%] shrink-0 truncate font-medium text-gray-700 px-1"
                                         title={item.loginId}>{item.loginId || '-'}</div>
                                    <div className="w-[12%] shrink-0 truncate px-1 font-semibold"
                                         title={item.username}>{item.username || '-'}</div>
                                    <div className="w-[12%] shrink-0 px-1">
                                        <div
                                            className="font-semibold text-blue-600 bg-blue-50/60 py-0.5 rounded-md max-w-[110px] mx-auto text-[11px]">
                                            {formatSchoolAndGrade(item.schoolLevel, item.grade)}
                                        </div>
                                    </div>

                                    <div
                                        className="w-[15%] shrink-0 px-1 text-gray-600 flex justify-center items-center">
                                        {item.role === 'TEACHER' || item.role === 'ADMIN' || item.isDeleted === 1 ? (
                                            <span className="text-gray-400 font-medium">-</span>
                                        ) : isAdmin ? (
                                            <select
                                                value={currentTeacherName}
                                                onChange={(e) => handleTeacherChange(actualUserId, currentKey, e.target.value)}
                                                disabled={isUpdating}
                                                className="w-full max-w-[120px] border border-gray-200 rounded px-1 py-0.5 text-[11px] bg-white text-gray-700 cursor-pointer text-center shadow-sm"
                                            >
                                                <option value="미지정">미지정</option>
                                                {MOCK_TEACHERS.map((teacher) => (
                                                    <option key={teacher.id}
                                                            value={teacher.name}>{teacher.name}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <span className="font-medium text-gray-700">{currentTeacherName}</span>
                                        )}
                                    </div>

                                    <div className="w-[12%] shrink-0 px-1 flex justify-center items-center">
                                        {item.role === 'TEACHER' || item.role === 'ADMIN' ? (
                                            <span className="text-gray-400 font-medium">-</span>
                                        ) : item.isDeleted === 1 ? (
                                            <span
                                                className="px-2 py-0.5 rounded text-[11px] font-medium border border-gray-200 bg-gray-100 text-gray-400 text-center block w-full max-w-[90px]">탈퇴완료</span>
                                        ) : isAdmin ? (
                                            <select
                                                value={currentStatus}
                                                onChange={(e) => handleStatusChange(actualUserId, currentKey, e.target.value)}
                                                disabled={isUpdating}
                                                className={`w-full max-w-[90px] border rounded py-0.5 text-[11px] font-medium cursor-pointer text-center shadow-sm
                                                    ${currentStatus === 'ACTIVE' ? 'border-green-200 bg-green-50 text-green-700' : ''}
                                                    ${currentStatus === 'PENDING' ? 'border-amber-200 bg-amber-50 text-amber-700' : ''}
                                                    ${currentStatus === 'INACTIVE' ? 'border-red-200 bg-red-50 text-red-400' : ''}
                                                `}
                                            >
                                                <option value="PENDING">미지정</option>
                                                <option value="ACTIVE">정회원</option>
                                                <option value="INACTIVE">휴면</option>
                                            </select>
                                        ) : (
                                            <span className={`px-2 py-0.5 rounded text-[11px] font-medium border text-center block w-full max-w-[90px]
                                                ${currentStatus === 'ACTIVE' ? 'border-green-200 bg-green-50 text-green-700' : ''}
                                                ${currentStatus === 'PENDING' ? 'border-amber-200 bg-amber-50 text-amber-700' : ''}
                                                ${currentStatus === 'INACTIVE' ? 'border-red-200 bg-red-50 text-red-400' : ''}
                                            `}>{getStatusLabel(currentStatus)}</span>
                                        )}
                                    </div>

                                    <div
                                        className="w-[13%] shrink-0 font-mono text-gray-400 px-1">{item.createdAt?.split('T')[0] || '-'}</div>

                                    {isAdmin && (
                                        <div className="w-[10%] shrink-0 px-1 flex justify-center items-center">
                                            {item.isDeleted === 1 ? (
                                                <span className="text-gray-300 text-[11px]">-</span>
                                            ) : (
                                                <button onClick={() => handleOpenWithdrawModal(item, currentKey)}
                                                        className="text-[11px] py-1 px-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-colors shadow-sm">탈
                                                    퇴</button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            {/* 페이지네이션 */}
            {filteredUsers.length > 0 && (
                <div className="mt-1 flex justify-center">
                    <Pagination currentPage={currentPage} totalItems={filteredUsers.length} itemsPerPage={ITEMS_PER_PAGE} onPageChange={setCurrentPage} />
                </div>
            )}

            {/* 회원 탈퇴 커스텀 팝업 모달 */}
            {isModalOpen && targetUser && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
                    <div className="bg-white rounded-xl p-6 w-full max-w-[360px] flex flex-col text-center gap-5 shadow-xl">
                        <div className="flex flex-col gap-1.5">
                            <p className="text-base font-bold text-gray-800">
                                <span className="text-blue-600 font-extrabold">{targetUser.username}</span>
                                <span className="text-gray-400 font-normal mx-1.5">|</span>
                                <span className="text-gray-600">{targetUser.infoText}</span>
                            </p>
                            <p className="text-sm font-semibold text-red-500 mt-1">정말 탈퇴하시겠습니까?</p>
                            <p className="text-[11px] text-gray-400">탈퇴 시 개인정보가 파기 및 잠금 처리됩니다.</p>
                        </div>
                        <div className="flex flex-row gap-2.5 w-full justify-center">
                            <button onClick={() => { setIsModalOpen(false); setTargetUser(null); }} className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-600 font-medium text-xs">취소</button>
                            <button onClick={handleConfirmWithdraw} className="flex-1 py-2 rounded-lg bg-red-500 text-white font-bold text-xs shadow-sm">확인</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;