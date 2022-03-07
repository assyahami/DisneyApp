import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBYq1FY-n1m45L9gOyMcPb2UojZSL1j7wA',
  authDomain: 'disney-bb22a.firebaseapp.com',
  projectId: 'disney-bb22a',
  storageBucket: 'disney-bb22a.appspot.com',
  messagingSenderId: '1062434615236',
  appId: '1:1062434615236:web:e99ac7a3e34da734c1be91',
  measurementId: 'G-8VY5B3E3Y9',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const getauth =  getAuth(firebaseApp);
const db = firebase.firestore()
const Authication = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { getauth,db, Authication , provider};
