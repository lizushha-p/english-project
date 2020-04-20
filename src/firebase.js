import * as firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB_0ijhtAUWNbdwAfeDjynHhwzzT-9OtMY",
  authDomain: "english-project-ec7f0.firebaseapp.com",
  databaseURL: "https://english-project-ec7f0.firebaseio.com",
  projectId: "english-project-ec7f0",
  storageBucket: "english-project-ec7f0.appspot.com",
  messagingSenderId: "260364217764",
  appId: "1:260364217764:web:74b993eec731098419a531",
  measurementId: "G-QYPQE2RYYN"
};
 
export const baseFirebase = firebase.initializeApp(firebaseConfig);

export const getUserByLocalId = async (localId) => {
  return baseFirebase.database().ref(`users/${localId}`).once('value',
    (snap) => snap.val(),
    (error) => console.error(error),
  );
}