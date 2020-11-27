import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDBbu5sHkPzdfNI1NAmpnLJGK3zsxvsaD8',
  authDomain: 'wizeline-react-bootcamp-2020.firebaseapp.com',
  databaseURL: 'https://wizeline-react-bootcamp-2020.firebaseio.com',
  projectId: 'wizeline-react-bootcamp-2020',
  storageBucket: 'wizeline-react-bootcamp-2020.appspot.com',
  messagingSenderId: '682574557166',
  appId: '1:682574557166:web:440cff285c7f57f383a8ff',
  measurementId: 'G-0JD1C2YL8X',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
