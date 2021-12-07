import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB59iB52Wj7ZFRnKNWdp_t1OYy4tev0LCg",
  authDomain: "crown-db-d63f5.firebaseapp.com",
  projectId: "crown-db-d63f5",
  storageBucket: "crown-db-d63f5.appspot.com",
  messagingSenderId: "831490080111",
  appId: "1:831490080111:web:44c4da0e4072b89cb7bc9a",
  measurementId: "G-6C0TH3ZJ7K"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app)

const db = getFirestore();

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {return signInWithPopup(auth, provider)};