import { AnyAction } from 'redux';
import { INITIAL_STATE } from '../../types';
import { ADD_FAVORITE_NEWS, REMOVE_FAVORITE_NEWS } from '../actions';

const newsReducer = (
  state = INITIAL_STATE,
  action: AnyAction,
  ) => {
  switch (action.type) {
    case 'SET_NEWS':
      return {
        ...state,
        items: action.payload,
      };
    case ADD_FAVORITE_NEWS:
      return {
        ...state,
        favoriteNews: [...state.favoriteNews, action.payload],
      };
    case REMOVE_FAVORITE_NEWS:
      return {
        ...state,
        favoriteNews: state.favoriteNews.filter((id: number) => id !== action.payload),
      };
    case 'GET_STORAGE_FAVORITE_NEWS':
      return {
        ...state,
        favoriteNews: action.payload,
      };
    default:
      return state;
  }
}

export default newsReducer;
