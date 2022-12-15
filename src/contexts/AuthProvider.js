import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ( {children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user sign in
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Update User Profile
    const updateUserProfileData = (name, photo) =>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo});
    };

    // google Sign in
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

     // github Sign in
    const githubSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        createUser,
        user,
        loading,
        googleSignIn,
        githubSignIn,
        updateUserProfileData,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;