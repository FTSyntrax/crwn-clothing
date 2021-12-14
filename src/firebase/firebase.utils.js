import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBXrafwvz3VM-holoaHd2FlY_5SsD0W05s",
  authDomain: "crown-db-51906.firebaseapp.com",
  projectId: "crown-db-51906",
  storageBucket: "crown-db-51906.appspot.com",
  messagingSenderId: "817575093469",
  appId: "1:817575093469:web:a5f5f491caf943dcbaa734",
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;