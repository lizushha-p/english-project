import { SET_QUIZ } from './quiz-actions';

const INITIAL_STATE = {
  quiz: [],
};

export const quizReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_QUIZ:
      return {
        ...state,
        quiz: payload,
      };
    default:
      return state;
  }
}
