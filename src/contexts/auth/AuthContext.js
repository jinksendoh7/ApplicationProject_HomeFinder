import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { auth } from '../../configs/FirebaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Email and Password Logins here
  const Signup = (email, password) => {
    createUserWithEmailAndPassword(email, password)
    .then((result) => {
      setUser(result.user);
    })

  }

  const Login = (email, password) => {
    signInWithEmailAndPassword(email, password)
  }
  const LogOut = () => {
    signOut(auth)
  }

  // Social Logins Start here
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    //signInWithRedirect(auth, provider)
  };

  //Facebook Login still broken.
  // const facebookSignIn = () => {
  //   const provider = new firebase.auth.FacebookAuthProvider();
  //   provider.addScope('user_birthday');

  //   firebase.auth().signInWithPopup(provider).then(function (result) {
  //     // This gives you a Facebook Access Token.
  //     const token = result.credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //   })
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User Loggedin', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, LogOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};