import { useContext, createContext, useEffect, useState } from 'react';
import {
  //FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
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
  const LoginWithFirebaseAuth = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  
  }

  const SignUpWithGoogle = async()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
      const userInfo = { 
          uid: result.user.uid,
          firstname: result.user.displayName.split(" ")[0],
          lastname: result.user.displayName.split(" ")[1],
          email: result.user.email,
      };
    setUser(userInfo);
     return userInfo;
  
  }
  const LogoutWithFirebaseAuth = async() => {
    signOut(auth)
  }

  // Social Logins Start here
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result =  await signInWithPopup(auth, provider);
    const userInfo = { 
        uid: result.user.uid,
        firstname: result.user.displayName.split(" ")[0],
        lastname: result.user.displayName.split(" ")[1],
        email: result.user.email,
    };

    //signInWithRedirect(auth, provider)
  };


  // Sign in Facebook using a popup.
  const facebookSignIn = () => {
    //const provider = new FacebookAuthProvider();
   
   // const result = signInWithPopup(auth, provider);

    // The signed-in user info.
    // const user = result.user;
    // This gives you a Facebook Access Token.
    // const credential = FacebookAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
  }


  //reset func
  const SendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
          SignUpWithGoogle,
          LoginWithFirebaseAuth,
          LogoutWithFirebaseAuth,
          SendPasswordReset,
          user,
          setUser,
          }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};