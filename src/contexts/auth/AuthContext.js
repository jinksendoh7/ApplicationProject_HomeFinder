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