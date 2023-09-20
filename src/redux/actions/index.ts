import { Dispatch, TypeNewsItens } from "../../types";

export const SET_NEWS = 'SET_NEWS';
export const ADD_FAVORITE_NEWS = 'ADD_FAVORITE_NEWS';
export const REMOVE_FAVORITE_NEWS = 'REMOVE_FAVORITE_NEWS';

export function setNews(news: TypeNewsItens[]) {
  return {
    type: SET_NEWS,
    payload: news,
  };
}

export function addFavoriteNews(news: number) {
  return {
    type: ADD_FAVORITE_NEWS,
    payload: news,
  };
}

export function removeFavoriteNews(news: number) {
  return {
    type: REMOVE_FAVORITE_NEWS,
    payload: news,
  };
}

export const fetchAPINewsData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const data = await response.json();
      dispatch(setNews(data.items));
    } catch (error) {
      console.log(error);
    }
  };
};