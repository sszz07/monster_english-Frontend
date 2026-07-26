import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoTrashOutline, IoPencil } from "react-icons/io5";
import apiClient from "@/api";
import { Pagination } from "@/components/common/Pagination";
import { SearchBox, SearchOption } from "@/components/common/SearchBox";
import { crossPlatformAlert, crossPlatformConfirm } from "@/utils/crossPlatformAlert";
import { useSearch } from "@/hooks/useSearch";

const ITEMS_PER_PAGE = 10;

// 💡 1. 이미지의 회원 관리 데이터 포맷에 맞게 인터페이스 규격화
interface Member {
    memberId: number;       // 고유 ID
    email: string;          // 아이디 (이메일)
    name: string;           // 이름
    grade: string;          // 학년/학교급 (예: 초등 1학년, 중등 1학년 등)
    role: "STUDENT" | "TEACHER"; // 구분
    assignedTeacher: string;// 배정 강사
    status: string;         // 회원 상태
    createdAt: string;      // 등록일
    progressStatus: string; // 학습 현황
}


interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
}

const BoardListPage = () => {
    const navigate = useNavigate();

    // 💡 2. 회원 관리에 어울리는 검색 옵션으로 세팅 (이름 또는 아이디로 검색)
    const boardSearchOptions: SearchOption[] = [
        { value: 'name', label: '이름' },
        { value: 'email', label: '아이디' },
    ];

    const [isLoading, setIsLoading] = useState(true);
    const [members, setMembers] = useState<Member[]>([]); // 공지사항에서 회원 리스트 상태로 변경
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    // useSearch 훅 연결 (기본 검색 기준: 이름)
    const { onSearch, getSearchParams } = useSearch('name');

    // 💡 백엔드로부터 회원 데이터를 패치해오는 함수
    const fetchMembers = useCallback(async (page: number) => {
        setIsLoading(true);
        try {
            const params: any = {
                page: page - 1,
                size: ITEMS_PER_PAGE,
                sort: 'id,desc',
                ...getSearchParams() // 검색어 조건 주입 (?name=김석현 등)
            };
            // 프로젝트 API 엔드포인트에 맞게 주소를 적절히 변경해 사용하세요. (예: /api/members/list)
            const response = await apiClient.get<Page<Member>>('/api/announcements/list', { params });
            setMembers(response.data.content);
            setTotalItems(response.data.totalElements);

        } catch (error) {
            console.error("로드 실패:", error);
            crossPlatformAlert("Failed", "Try again");
        } finally {
            setIsLoading(false);
        }
    }, [getSearchParams]);

    useEffect(() => {
        fetchMembers(currentPage);
    }, [currentPage, fetchMembers]);

    // 사용자가 검색창에 단어를 치고 [검색]을 눌렀을 때 작동하는 핸들러
    const handleSearchSubmit = (type: string, query: string) => {
        onSearch(type, query);

        // 검색 버튼을 누르면 무조건 리스트의 1페이지로 강제 리셋합니다.
        if (currentPage === 1) {
            fetchMembers(1);
        } else {
            setCurrentPage(1);
        }
    };

    const handleDelete = (id: number, name: string) => {
        crossPlatformConfirm(
            "회원 삭제",
            `정말로 '${name}' 회원을 삭제하시겠습니까?`,
            async () => {
                try {
                    await apiClient.delete(`/api/announcements/${id}`);
                    crossPlatformAlert("Success", "");
                    fetchMembers(currentPage);
                } catch (error) {
                    crossPlatformAlert("Failed", "Try again");
                }
            }
        );
    };

    // 💡 [핵심 아키텍처 가공 레이어]
    // 검색 여부와 상관없이 백엔드 배열 데이터가 존재한다면 "오직 맨 첫 번째(index 0) 데이터 딱 한 개"만 낚아채서 1개짜리 임시 배열을 만듭니다.
    const displayItem = members.length > 0 ? [members[0]] : [];

    return (
        <div className="bg-white min-w-[1024px] p-6 rounded-lg shadow-sm h-full flex flex-col overflow-x-auto">

            <div className="mb-4">
                <SearchBox options={boardSearchOptions} onSearch={handleSearchSubmit} />
            </div>

            {/* 💡 3. 이미지와 100% 일치하도록 일목요연하게 정리한 테이블 헤더 */}
            <div className="flex flex-row bg-gray-50 border-b border-gray-200 py-3 px-2 font-bold text-gray-700 text-center text-sm">
                <div className="w-12">No</div>
                <div className="flex-[2.5] text-left pl-4">아이디</div>
                <div className="flex-[1.5]">이름</div>
                <div className="flex-[1.5]">학년/학교급</div>
                <div className="flex-1">구분</div>
                <div className="flex-[1.5]">배정 강사</div>
                <div className="flex-[1.5]">회원 상태</div>
                <div className="flex-[1.5]">등록일</div>
                <div className="flex-1">관리</div>
            </div>

            {/* 테이블 바디 구역 */}
            <div className="flex-1 overflow-y-auto">
                {isLoading ? (
                    <div className="p-10 text-center text-gray-500">Loading...</div>
                ) : displayItem.length === 0 ? (
                    <div className="p-10 text-center text-gray-500">조회된 회원 정보가 없습니다.</div>
                ) : (
                    /* 💡 가공 레이어를 거친 displayItem(무조건 딱 한 줄)만 맵핑하여 렌더링을 차단합니다. */
                    displayItem.map((item, idx) => (
                        <div
                            key={item.memberId || idx}
                            className="flex flex-row items-center border-b border-gray-100 py-3 px-2 hover:bg-gray-50 transition-colors text-sm text-center text-gray-600"
                        >
                            {/* No */}
                            <div className="w-12 font-medium text-gray-400">{currentPage}</div>

                            {/* 아이디 */}
                            <div className="flex-[2.5] text-left pl-4 truncate font-medium text-gray-800">
                                {item.email || "-"}
                            </div>

                            {/* 이름 */}
                            <div className="flex-[1.5] font-medium text-gray-800">{item.name || "-"}</div>

                            {/* 학년/학교급 라벨 디자인 */}
                            <div className="flex-[1.5] flex justify-center">
                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                                    {item.grade || "-"}
                                </span>
                            </div>

                            {/* 구분 (STUDENT / TEACHER 역할에 따른 분기 색상) */}
                            <div className="flex-1 flex justify-center">
                                <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                                    item.role === "TEACHER"
                                        ? "bg-purple-100 text-purple-700"
                                        : "bg-gray-100 text-gray-700"
                                }`}>
                                    {item.role || "STUDENT"}
                                </span>
                            </div>

                            {/* 배정 강사 */}
                            <div className="flex-[1.5]">{item.assignedTeacher || "미지정"}</div>

                            {/* 회원 상태 */}
                            <div className="flex-[1.5]">{item.status || "미지정"}</div>

                            {/* 등록일 */}
                            <div className="flex-[1.5] text-gray-400 text-xs">
                                {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "2026-05-19"}
                            </div>

                            {/* 삭제 및 관리 버튼 */}
                            <div className="flex-1 flex justify-center">
                                <button
                                    onClick={() => handleDelete(item.memberId, item.name)}
                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                >
                                    <IoTrashOutline size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* 하단 페이징 레이아웃 */}
            <div className="mt-4 flex flex-col items-center justify-center relative w-full">
                <div className="flex justify-center w-full">
                    <Pagination
                        currentPage={currentPage}
                        totalItems={displayItem.length} // 한 줄만 노출되므로 페이지네이션 토탈 개수도 1개로 싱크
                        itemsPerPage={ITEMS_PER_PAGE}
                        onPageChange={setCurrentPage}
                    />
                </div>

                <button
                    onClick={() => navigate('/admin/write')}
                    className="absolute right-0 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
                >
                    <IoPencil />
                    <span>등록</span>
                </button>
            </div>
        </div>
    );
};

export default BoardListPage;