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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('Something went wrong. Error: ', err.message)
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;