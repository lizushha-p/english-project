import { baseFirebase } from '../../firebase';
import { QUIZ_STORE_KEY } from './quiz-constants';

const quizNamespacedAction = (type) => `${QUIZ_STORE_KEY}/${type}`;

export const SET_QUIZ = quizNamespacedAction('SET_QUIZ');
export const setQuiz = (payload) => ({
  type: SET_QUIZ,
  payload,
});

export const fetchQuizes = () => async (dispatch, getState) => {
  const quizes = await baseFirebase.database().ref(`quiz`).once('value',
    (snap) => snap.val(),
    (error) => console.error(error),
  );
  dispatch(setQuiz(quizes.val()));
}
