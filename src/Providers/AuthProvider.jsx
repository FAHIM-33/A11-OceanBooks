import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import pt from 'prop-types'
import auth from "../Config/firebase.config";

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

    const updateNameImg = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }


    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])


    const data = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin,
        updateNameImg
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: pt.node,
}
export default AuthProvider;