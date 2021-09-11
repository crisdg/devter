import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8t5ohz2KgDXOMQjKmZdkKyWuZNpZuKGQ",
  authDomain: "devter-baa6d.firebaseapp.com",
  projectId: "devter-baa6d",
  storageBucket: "devter-baa6d.appspot.com",
  messagingSenderId: "567020919941",
  appId: "1:567020919941:web:85f3ad47c7ec6854b69dec",
  measurementId: "G-ZN7H7GNWZT",
};
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseToUser = (user) => {
  console.log(user);
  const { email, photoURL } = user;
  const { displayName } = user.providerData[0];

  return {
    avatar: photoURL,
    userName: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = mapUserFromFirebaseToUser(user);
    onChange(normalizeUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
