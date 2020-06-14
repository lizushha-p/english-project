import { SET_LOG_IN } from './auth-actions';

const INITIAL_STATE = {
  isLoggined: false,
};

export const authReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: payload,
      }
    case SET_LOG_IN:
      return {
        ...state,
        isLoggined: true,
        uid: payload,
      };
    default:
      return state;
  }
}
