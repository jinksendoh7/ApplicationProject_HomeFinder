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
  const SignUpWithFirebaseAuth = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const userInfo = {
      uid: result.user.uid,
      email: result.email
    };
    setUser(userInfo);
    return userInfo;
  }
  // eslint-disable-next-line
  const LoginWithFirebaseAuth = (email, password) => {
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
    <AuthContext.Provider value={{ 
          googleSignIn,
          facebookSignIn,
          SignUpWithFirebaseAuth,
          LoginWithFirebaseAuth,
          LogOut,
          user
          }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};