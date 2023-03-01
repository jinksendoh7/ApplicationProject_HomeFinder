import { useContext, createContext, useEffect, useState } from 'react';
import {
  FacebookAuthProvider,
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
  // eslint-disable-next-line
  const Signup = (email, password) => {
    createUserWithEmailAndPassword(email, password)
    .then((result) => {
      setUser(result.user);
    })

  }
  // eslint-disable-next-line
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


  // Sign in Facebook using a popup.
  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
   
    const result = signInWithPopup(auth, provider);

    // The signed-in user info.
    // const user = result.user;
    // This gives you a Facebook Access Token.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
  }



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
    <AuthContext.Provider value={{ googleSignIn, facebookSignIn, LogOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};