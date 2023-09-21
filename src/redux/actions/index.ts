import { Dispatch, StoreType, TypeNewsItens } from "../../types";

export const SET_NEWS = 'SET_NEWS';
export const ADD_FAVORITE_NEWS = 'ADD_FAVORITE_NEWS';
export const REMOVE_FAVORITE_NEWS = 'REMOVE_FAVORITE_NEWS';
export const GET_STORAGE_FAVORITE_NEWS = 'GET_STORAGE_FAVORITE_NEWS';


export function setNews(news: TypeNewsItens[]) {
  return {
    type: SET_NEWS,
    payload: news,
  };
}

export function addFavoriteNews(news: number) {
  return (dispatch: Dispatch, getState: () => StoreType) => {
    dispatch({
      type: ADD_FAVORITE_NEWS,
      payload: news,
    });
    // Atualiza o localStorage através do estado atualizado após favoritar uma notícia
    const updatedState = getState();
    localStorage.setItem('favoriteNews', JSON.stringify(updatedState.news.favoriteNews));
  };
}

export function removeFavoriteNews(news: number) {
  return (dispatch: Dispatch, getState: () => StoreType) => {
    dispatch({
      type: REMOVE_FAVORITE_NEWS,
      payload: news,
    });
    // Atualiza o localStorage através do estado atualizado após desfavoritar uma notícia
    const updatedState = getState();
    localStorage.setItem('favoriteNews', JSON.stringify(updatedState.news.favoriteNews));
  };
}

export function getStorageFavoriteNews() {
  return (dispatch: Dispatch) => {
    // Converte os dados armazenados no localStorage de volta para seu formato original
    const localStorageData = localStorage.getItem('favoriteNews');
    const favoriteNews = localStorageData ? JSON.parse(localStorageData) : [];
    // Dispatch da action para atualizar o estado com os dados recuperados
    dispatch({
      type: GET_STORAGE_FAVORITE_NEWS,
      payload: favoriteNews,
    });
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