import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const INITIAL_STATE = {
  items: [],
  favoriteNews: [],
};

export type TypeNewsItens = {
  id: number,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  imagens: string,
  link: string,
};

export type StoreType = {
  news: {
    items: TypeNewsItens[],
    favoriteNews: number[],
  }
};

export type Dispatch = ThunkDispatch<StoreType, null, AnyAction>;