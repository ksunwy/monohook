import { useEffect } from 'react';
import { createMonoHook, useFetch, useLazyFetch } from 'use-mono-hook'
import { API_BACKEND } from '../../../../../constants';

export interface RecordItem {
    result: {
        slaughter: { date: string; total: number };
        butchering: { date: string; total: number };
    };
}

const _useRecordGetData = () => {
    const [{ data, loading, }, updateRecordGetData] = useLazyFetch<RecordItem>({
        url: '/slaughterhouse/record',
        axiosInstance: API_BACKEND,
    })

    useEffect(() => {
        updateRecordGetData().catch(console.error);
      }, [updateRecordGetData]);

    return {
        data: data,
        loading,
        updateRecordGetData
    }
}

export const useRecordGetData = createMonoHook<typeof _useRecordGetData>(_useRecordGetData, {
    defaults: {
        data: undefined,
        loading: true,
        updateRecordGetData: () => {}
    } as any,
}).useHook 
