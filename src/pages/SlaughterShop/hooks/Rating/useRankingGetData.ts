import { createMonoHook, useFetch } from 'use-mono-hook'
import { API_BACKEND } from '../../../../../constants';

export interface DataItem {
    name: string;
    countEmployees: number;
    countViolations: number;
    ratingPercent: number;
}

interface RecordItem {
    result: DataItem[];
}

const _useRankingGetData = () => {
    const { data, loading, } = useFetch<RecordItem>({
        url: '/slaughterhouse/departments-ranking',
        axiosInstance: API_BACKEND,
    })

    return {
        data: data,
        loading,
    }
}

export const useRankingGetData = createMonoHook<typeof _useRankingGetData>(_useRankingGetData, {
    defaults: {
        data: { result: [] },
        loading: true,
    } as any,
}).useHook