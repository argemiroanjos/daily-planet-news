export const SET_NEWS = 'SET_NEWS';

export function setNews(news: string[]) {
  return {
    type: SET_NEWS,
    payload: news,
  };
}