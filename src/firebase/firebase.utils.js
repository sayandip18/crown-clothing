import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB59iB52Wj7ZFRnKNWdp_t1OYy4tev0LCg",
  authDomain: "crown-db-d63f5.firebaseapp.com",
  projectId: "crown-db-d63f5",
  storageBucket: "crown-db-d63f5.appspot.com",
  messagingSenderId: "831490080111",
  appId: "1:831490080111:web:44c4da0e4072b89cb7bc9a",
  measurementId: "G-6C0TH3ZJ7K"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => {return auth.signInWithPopup(provider)};