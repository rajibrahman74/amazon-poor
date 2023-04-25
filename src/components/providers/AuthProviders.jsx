import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

  const [user, setUser] = useState(null);
  
  // create user for singup
    const createUser =  (email, password) => {
      return createUserWithEmailAndPassword (auth, email, password);
    }

  // sing in user
  const singIn = (email, password) => {
    return signInWithEmailAndPassword (auth, email, password)
  }

  //  sing out
  const logOut = () => {
    return signOut(auth);
  }
    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
    }
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProviders;