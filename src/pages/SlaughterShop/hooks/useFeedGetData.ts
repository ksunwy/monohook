import { createMonoHook, useFetch } from 'use-mono-hook'
import { API_BACKEND } from '../../../../constants';

export interface FeedItem {
  id: number;
  type: "news" | "congratulation";
  imageUrl: string;
  date: string;
  title: string;
  body: string;
}

interface FeedResponse {
  result: FeedItem[];
}

const _useFeedGetData = () => {
  const { data, loading, } = useFetch<FeedResponse>({
    url: '/slaughterhouse/feed',
    axiosInstance: API_BACKEND,
  })

  return {
    data: data,
    loading,
  }
}

export const useFeedGetData = createMonoHook<typeof _useFeedGetData>(_useFeedGetData, {
  defaults: {
    data: { result: [] },
    loading: true,
  } as any,
}).useHook