import { createMonoHook, useFetch } from 'use-mono-hook'
import { API_BACKEND } from '../../../../../constants';

const _useSlaughterTodayGetData = () => {
    const { data, loading, } = useFetch({
        url: '/slaughterhouse/slaughter/today',
        axiosInstance: API_BACKEND,
    })

    return {
        data: data,
        loading,
    }
}

export const useSlaughterTodayGetData = createMonoHook<typeof _useSlaughterTodayGetData>(_useSlaughterTodayGetData, {
    defaults: {
        data: {
           
        },
        loading: true,
    } as any,
}).useHook