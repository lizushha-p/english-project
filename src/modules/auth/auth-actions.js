import { AUTH_STORE_KEY } from './auth-constants';

const namespacedAction = (type) => `${AUTH_STORE_KEY}/${type}`;

export const SET_LOG_IN = namespacedAction('SET_LOG_IN');
export const setLogIn = () => ({
  type: SET_LOG_IN,
});

