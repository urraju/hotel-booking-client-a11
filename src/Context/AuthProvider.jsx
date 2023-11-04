import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/FirebaseConfig";

export const AuthContext = createContext()
       const google = new GoogleAuthProvider()
       const github = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const register = (email,password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
        })
        return () => unSubscribe()
    })

    const userInfo = {
        isLoading,
        register,
        google,
        github,
        login,
        logOut,
        user,
        
    }

    return(
        <AuthContext.Provider value={userInfo}>
              {children}
        </AuthContext.Provider>
    )}
export default AuthProvider;