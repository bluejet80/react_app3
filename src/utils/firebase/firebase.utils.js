import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD0sSMvnWGc8jp-BDeviO1-Zm_TW_vMIM",
  authDomain: "react-clothing-db-9bd66.firebaseapp.com",
  projectId: "react-clothing-db-9bd66",
  storageBucket: "react-clothing-db-9bd66.appspot.com",
  messagingSenderId: "490120376973",
  appId: "1:490120376973:web:40286ddab14e2ea03668c4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// firestrore db

export const db = getFirestore(); //singleton instance

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error Creating the User", error.message);
    }
  }

  return userDocRef;
};
