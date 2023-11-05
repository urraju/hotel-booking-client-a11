import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/FirebaseConfig";
import axios from "axios";

export const AuthContext = createContext()
       const googleProvider = new GoogleAuthProvider()
       const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const google = () => {
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const github = () => {
        setIsLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

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
    const profile = (userUpdate) => {
        setIsLoading(true);
        return updateProfile(auth.currentUser, userUpdate);
      };
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email : userEmail}
            setUser(currentUser)
            setIsLoading(false)

            if(currentUser) {
                axios.post('http://localhost:3000/jwt',loggedUser, {withCredentials : true})
                .then(res => console.log('token respons', res.data))
            }else{
                axios.post('http://localhost:3000/logout',loggedUser, {withCredentials : true})
                .then(res => {
                    console.log('success data', res.data);
                })
            }
        })
        return () => unSubscribe()
    })

    const userInfo = {
        isLoading,
        register,
        google,
        github,
        profile,
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