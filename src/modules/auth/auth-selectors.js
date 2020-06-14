import { createSelector } from 'reselect';

const getAuthState = (state) => state.auth;

export const getUserUid = createSelector(
  getAuthState,
  (authState) => authState.uid,
);
