import { useCallback, useState } from "react";

interface SearchState {
    type: string;
    keyword: string;
}

export const useSearch = (defaultType: string = 'title') => {
    // 검색 카테고리, 검색 키워드
    const [searchState, setSearchState] = useState<SearchState>({
        type: defaultType,
        keyword: '',
    });

    // 검색 실행 (searchBox의 onSearch에 전달)
    const onSearch = useCallback((type: string, keyword: string) => {
        setSearchState({ type, keyword });
    }, []);

    // API 요청용 파라미터 생성
    const getSearchParams = useCallback(() => {
        if (!searchState.keyword) return {};
        return {
            searchType: searchState.type,
            searchKeyword: searchState.keyword
        };
    }, [searchState]);

    return {
        searchState,      // 현재 검색 상태 
        onSearch,         // SearchBox에 넘겨줄 함수
        getSearchParams
    };
};
