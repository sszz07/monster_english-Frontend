import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "@/api";
import { Pagination } from "@/components/common/Pagination";
import { crossPlatformAlert } from "@/utils/crossPlatformAlert";
import { ProductType } from "@/types/product";

const ITEMS_PER_PAGE = 10;

type CategoryFilter = 'ALL' | 'SUBSCRIPTION' | 'GOODS';

interface Item {
    id: number;
    productName: string;
    price: number;
    imageUrl: string | null;
    type: ProductType;
    status: 'ONSALE' | 'NOTONSALE';
}

interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
}

const StorePage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState<Item[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [category, setCategory] = useState<CategoryFilter>('ALL');

    const fetchItems = useCallback(async (page: number) => {
        setIsLoading(true);
        try {
            const response = await apiClient.get<Page<Item>>('/api/products/list', {
                params: {
                    page: page - 1,
                    size: ITEMS_PER_PAGE,
                    sort: 'id,desc',
                },
            });
            setItems(response.data.content);
            setTotalItems(response.data.totalElements);
        } catch (error) {
            crossPlatformAlert('오류', '상품 목록 로드 실패');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => { fetchItems(currentPage); }, [currentPage, fetchItems]);

    return (
        <div className="p-5 mx-auto max-w-[1270px] min-h-screen bg-white">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2C3E50] mb-4 ml-4">
                Supplies for class
            </h1>

            <div className="flex justify-end gap-3 mb-6">
                <button
                    onClick={() => setCategory('ALL')}
                    className={`px-4 py-2 rounded-full text-sm font-medium border
                                ${category === 'ALL'
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                        }`}
                >
                    All
                </button>

                <button
                    onClick={() => setCategory('SUBSCRIPTION')}
                    className={`px-4 py-2 rounded-full text-sm font-medium border
            ${category === 'SUBSCRIPTION'
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                        }`}
                >
                    Plan
                </button>

                <button
                    onClick={() => setCategory('GOODS')}
                    className={`px-4 py-2 rounded-full text-sm font-medium border
            ${category === 'GOODS'
                            ? 'bg-gray-700 text-white border-gray-700'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                        }`}
                >
                    Goods
                </button>
            </div>

            {isLoading ? (
                <div className="text-center mt-20">Loading...</div>
            ) : items.length === 0 ? (
                <div className="text-center mt-20 text-gray-500">등록된 상품이 없습니다.</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                    {items
                        .filter(item => item.status === 'ONSALE')
                        .filter(item => {
                            if (category === 'ALL') return true;
                            if (category === 'SUBSCRIPTION') return item.type === 'SUBSCRIPTION';
                            if (category === 'GOODS') return item.type !== 'SUBSCRIPTION';
                            return true;
                        })
                        .map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/main/store/${item.id}`)}
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md cursor-pointer transition-shadow"
                            >
                                <div className="aspect-square bg-gray-100 relative">
                                    {item.imageUrl ? (
                                        <img src={item.imageUrl} alt={item.productName} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-300">NO IMAGE</div>
                                    )}
                                </div>

                                <div className="p-3">
                                    <h3 className="font-medium text-gray-800 text-sm mb-2 truncate">
                                        {item.productName}
                                    </h3>

                                    {/* 가격과 뱃지 */}
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-gray-900 text-lg">
                                            {item.price.toLocaleString()} ₩
                                        </p>

                                        {/* 타입 뱃지 */}
                                        <span
                                            className={`
                                            text-xs font-bold px-2 py-1 rounded 
                                            ${item.type === 'SUBSCRIPTION'
                                                    ? 'bg-blue-100 text-blue-600'  // Plan 스타일
                                                    : 'bg-gray-100 text-gray-600'   // Goods 스타일
                                                }
                                        `}
                                        >
                                            {item.type === 'SUBSCRIPTION' ? 'Plan' : 'Goods'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            )}

            {totalItems > 0 && (
                <div className="flex justify-center border-t border-gray-100 pt-4">
                    <Pagination
                        currentPage={currentPage}
                        totalItems={totalItems}
                        itemsPerPage={ITEMS_PER_PAGE}
                        onPageChange={setCurrentPage}
                    />
                </div>
            )}
        </div>
    );
};

export default StorePage;
