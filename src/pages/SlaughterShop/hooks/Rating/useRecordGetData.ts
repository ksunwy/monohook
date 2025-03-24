import { createMonoHook, useFetch } from 'use-mono-hook'
import { API_BACKEND } from '../../../../../constants';

export interface RecordItem {
    result: {
        slaughter: { date: string; total: number };
        butchering: { date: string; total: number };
    };
}

const _useRecordGetData = () => {
    const { data, loading, } = useFetch<RecordItem>({
        url: '/slaughterhouse/record',
        axiosInstance: API_BACKEND,
    })

    return {
        data: data,
        loading,
    }
}

export const useRecordGetData = createMonoHook<typeof _useRecordGetData>(_useRecordGetData, {
    defaults: {
        data: {
            result: {
                slaughter: { date: "", total: 0 },
                butchering: { date: "", total: 0 }
            }
        },
        loading: true,
    } as any,
}).useHook