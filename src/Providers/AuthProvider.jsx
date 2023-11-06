import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import pt from 'prop-types'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    let googleProvider = new GoogleAuthProvider();
    let [user, setUser] = useState({})
    let [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const data = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;