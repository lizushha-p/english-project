import { history } from '../../history';
import { baseFirebase, getUserByLocalId } from '../../firebase';
import { AUTH_STORE_KEY } from './auth-constants';

const namespacedAction = (type) => `${AUTH_STORE_KEY}/${type}`;

export const SET_LOG_IN = namespacedAction('SET_LOG_IN');
export const setLogIn = (payload) => ({
  type: SET_LOG_IN,
  payload,
});

export const loginByEmailAndPassword = (email, password) => (dispatch) => {
  baseFirebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
        console.log(res);
      dispatch(setLogIn(res.user.uid));
      getUserByLocalId(res.user.uid)
          // берем пользователя
          .then(res => {
            console.log(res.val());
            if (res.val().level === 'A2') {
              history.push('/course')
              return;
            }
            history.push('/error-exist-course')
          });
    })
    .catch(err => console.log('err'));
}