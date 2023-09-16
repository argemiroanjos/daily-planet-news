import { AnyAction } from 'redux';
import { INITIAL_STATE } from '../../types';

const newsReducer = (
  state = INITIAL_STATE,
  action: AnyAction,
  ) => {
  switch (action.type) {
    case 'SET_NEWS':
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
}

export default newsReducer;
