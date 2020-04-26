import { createSelector } from 'reselect';
import { QUIZ_STORE_KEY } from './quiz-constants';

const getQuizStore = (state) => state[QUIZ_STORE_KEY];

export const getQuizes = createSelector(
  getQuizStore,
  (quizes) => quizes.quiz
);
