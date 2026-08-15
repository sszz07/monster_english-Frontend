
export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fb] py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
                <header className="border-b border-gray-200 pb-6 mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        개인정보처리방침
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-gray-500">
                        마지막 수정일: 2023-02-03 17:34:35
                    </p>
                </header>

                <div className="space-y-10 text-gray-800 leading-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. 개인정보 처리방침</h2>
                        <p>
                            Monstereng.com (주) (이하 “본사”, “저희”) 은 몬스터어학원
                            (이하 “본 서비스”) 온라인 영어 회화 서비스의 운영에 대한 사회적
                            책임의 중요성을 인식하여 늘 개인 정보를 적절하게 관리하기 위해
                            노력하고 있습니다.
                        </p>
                        <p className="mt-4">
                            본 개인정보 처리방침은 개인 정보의 적절한 처리, 관련 법령 준수,
                            그리고 개인 정보 보호 강화를 위해 마련되었습니다.
                        </p>

                        <div className="mt-5 space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">1.1 개인정보 보호 시스템</h3>
                                <p>
                                    본사는 개인 정보를 적절하게 관리하기 위해 역할과 책임을
                                    명확히 하고, 암호화 및 다양한 보호 조치를 통해 회원의 정보를
                                    보호합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">1.2 개인정보의 안전</h3>
                                <p>
                                    공인되지 않은 접근, 절도, 남용, 누출, 파괴, 변경 등을
                                    방지하기 위한 예방책과 개선책을 시행합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    1.3 개인정보 관련 법과 규정 준수
                                </h3>
                                <p>
                                    본사는 개인정보 보호법 및 정보통신망 관련 법률 등 개인정보
                                    보호에 관한 관련 규정을 준수합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    1.4 지속적인 개선
                                </h3>
                                <p>
                                    사업 환경, 법적 환경, IT 환경 변화에 맞추어 개인정보 보호
                                    정책과 시스템을 지속적으로 검토하고 개선합니다.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. 개인정보 취급자의 이름</h2>
                        <p>monstereng.com</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. 개인정보 수집에 관한 사항</h2>

                        <div className="space-y-5">
                            <div>
                                <h3 className="font-semibold text-lg">3.1 회원이 제공하는 정보</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>이름, 성별, 전화번호, 이메일 주소, 연락처, 직업</li>
                                    <li>제휴사 코드, 결제 정보, 결제 카드 정보</li>
                                    <li>회원 등록 및 변경 요청 정보</li>
                                    <li>상품 배송 및 구매 관련 정보</li>
                                    <li>고객센터 문의사항</li>
                                    <li>회원이 자발적으로 등록한 아이디, 관심분야, 기타 정보</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    3.2 서비스 사용 중 수집되는 정보
                                </h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>결제내역, 양도 및 결제 요청 내역</li>
                                    <li>이메일 소식지 구독 정보</li>
                                    <li>문의, 설문조사, 캠페인 응답, 서비스 검토 내용</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    3.3 웹사이트 방문 시 자동 수집 정보
                                </h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>IP 주소 및 도메인 이름</li>
                                    <li>브라우저 종류 및 버전</li>
                                    <li>운영체제 및 버전</li>
                                    <li>사용 언어 및 장소</li>
                                    <li>장치 정보(PC, 모바일, 통신사, 모델명 등)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">3.4 쿠키</h3>
                                <p>
                                    쿠키는 방문 페이지 등 정보를 기록하는 파일이며, 로그인 유지,
                                    개인화 서비스 제공, 트래픽 분석, 콘텐츠 및 서비스 개선 등을
                                    위해 사용됩니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    3.5 개인정보 수집 방법
                                </h3>
                                <p>홈페이지를 통한 회원가입, 관계 전자상거래 Site</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">
                            4. 개인정보 이용 목적
                        </h2>
                        <p className="mb-4">
                            본사는 수집한 개인정보를 회원 식별, 문의 응대, 결제, 배송,
                            고객지원, 부정 이용 방지, 서비스 공지, 광고 전달 등의 목적으로
                            사용합니다.
                        </p>

                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-sm md:text-base border-collapse">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left px-4 py-3 border-b">항목</th>
                                    <th className="text-left px-4 py-3 border-b">이용 목적</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="px-4 py-3 border-b">이름 / 주소 / 전화번호 / 이메일</td>
                                    <td className="px-4 py-3 border-b">
                                        문의 응대, 배송, 결제, 고객 지원, 공지, 광고 전달
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 border-b">신용카드 정보</td>
                                    <td className="px-4 py-3 border-b">
                                        결제 처리, 고객 지원, 부정 이용 방지
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 border-b">은행 계좌 정보</td>
                                    <td className="px-4 py-3 border-b">
                                        광고비 지급, 보수 지급, 결제 관련 업무
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 border-b">IP 주소 / 사용자 에이전트</td>
                                    <td className="px-4 py-3 border-b">
                                        부정 이용 방지, 문의 응답, 보안 확인
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">기타 동의 하에 제공된 정보</td>
                                    <td className="px-4 py-3">
                                        서비스 분석, 서비스 향상, 신규 서비스 구축
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">
                            5. 개인정보의 처리 및 보유기간, 파기절차 및 파기방법
                        </h2>
                        <p>
                            본사는 회원 탈퇴 시까지 개인정보를 보유합니다. 다만 관련 법령에
                            따라 일정 기간 보관이 필요한 경우 아래 기간 동안 보관할 수
                            있습니다.
                        </p>

                        <ul className="list-disc pl-6 mt-4 space-y-1">
                            <li>계약 또는 청약철회 기록: 5년</li>
                            <li>대금결제 및 재화 등의 공급 기록: 5년</li>
                            <li>소비자 불만 또는 분쟁처리 기록: 3년</li>
                            <li>신용정보 수집/처리 및 이용 기록: 3년</li>
                            <li>통신사실확인자료: 3개월</li>
                        </ul>

                        <p className="mt-4">
                            보유기간이 경과한 개인정보는 지체 없이 재생할 수 없는 기술적
                            방법으로 파기합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">
                            6. 개인정보 공개 요청 및 절차
                        </h2>
                        <p>
                            회원 또는 대리인은 개인정보의 공개, 수정, 이용 중단, 목적에 관한
                            질문 등을 요청할 수 있으며, 본사는 정해진 문의 절차에 따라
                            응대합니다.
                        </p>
                        <p className="mt-3">
                            문의 이메일:{" "}
                            <a
                                href="mailto:monstereng@gmail.com"
                                className="text-blue-600 underline"
                            >
                                monstereng@gmail.com
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">
                            7. 제3자 제공에 관한 사항
                        </h2>
                        <p>
                            본사는 원칙적으로 회원의 사전 동의 없이 개인정보를 제3자에게
                            제공하지 않습니다. 다만 법령에 따른 요청, 공공의 이익 보호,
                            국가기관의 법적 업무 수행 등 예외적인 경우에는 제공될 수
                            있습니다.
                        </p>

                        <ul className="list-disc pl-6 mt-4 space-y-1">
                            <li>법과 규제에 따른 요청이 있는 경우</li>
                            <li>공공의 이익을 위해 필요한 경우</li>
                            <li>국가기관 또는 공공기관의 법적 업무 수행에 필요한 경우</li>
                            <li>본사의 법적 권리 행사에 필요한 경우</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">
                            8. 개인정보의 취급위탁
                        </h2>
                        <div className="space-y-3">
                            <p>수탁자: KG 이니시스 / 목적: 결제 서비스</p>
                            <p>수탁자: monstereng.com / 목적: 개인정보의 수집</p>
                            <p>
                                개인정보 이용 목적: 본인 식별, 본인의사 확인, 회원제 서비스
                                관리, 웹사이트 서비스 제공
                            </p>
                            <p>보유·이용기간: 회원 탈퇴 시까지</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">
                            10. 이용자 및 법정대리인의 권리와 행사방법
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                회원 또는 만 14세 미만 회원의 법정대리인은 언제든지 개인정보를
                                조회, 수정, 탈퇴 요청할 수 있습니다.
                            </li>
                            <li>
                                개인정보 변경 또는 회원탈퇴 기능을 통해 직접 처리할 수 있으며,
                                서면, 전화, 이메일로도 요청할 수 있습니다.
                            </li>
                            <li>
                                개인정보 오류 정정 요청 시 정정 완료 전까지 해당 정보를 이용
                                또는 제공하지 않습니다.
                            </li>
                            <li>
                                해지 또는 삭제된 정보는 정해진 보유기간 및 파기 절차에 따라
                                처리됩니다.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">11. 기타 사항</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>본 규정은 본 서비스에 적용됩니다.</li>
                            <li>
                                외부 사이트로 이동한 경우 해당 사이트의 개인정보 정책을 확인해야
                                합니다.
                            </li>
                            <li>
                                본 방침은 수정될 수 있으며, 변경 시 공지사항을 통해 안내됩니다.
                            </li>
                        </ul>

                        <div className="mt-5 rounded-xl bg-gray-50 border border-gray-200 p-5">
                            <p className="font-semibold mb-2">고객센터 및 담당자 정보</p>
                            <p>이메일: monstereng@gmail.com</p>
                            <p>작성일: 2023년 1월 10일</p>
                            <p>대리 감독자: 박은영</p>
                            <p>개인정보 관리 책임자: 원재영 (010-3825-4299)</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}