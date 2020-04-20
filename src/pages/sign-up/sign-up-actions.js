import { setLogIn } from '../../modules/auth';
import { baseFirebase } from '../../firebase';
import { history } from '../../history';


export const signUpUser = ({
  email, password, login, firstName, lastName,
}) => async (dispatch) => {
  try {
    const response = await baseFirebase.auth().createUserWithEmailAndPassword(email, password);
    baseFirebase.database().ref(`users/${response.user.uid}`).set({
      firstName,
      lastName,
      email,
      login,
      password
    });
    dispatch(setLogIn());
    history.push('/level-question');
  } catch (e) {
    console.error(e);
  }
};
