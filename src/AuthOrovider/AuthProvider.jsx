import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
      const createUser = (email,password)=>{
        setLoading(true);
         return createUserWithEmailAndPassword (auth,email,password);
      }

      const singInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
      }

      //update user profile
      const updateUserProfile=(name,image,email)=>{
        return updateProfile(auth.currentUser, {
           displayName: name,
            photoURL: image,
            email:email
         })
       }
      

      const singInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
      }


      const singInGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
      }


     const LogOut = ()=>{
          setUser(' ')
        setLoading(true);
        return signOut(auth);
     } 


    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
    
        return () => {
              unSubscribe();
        }

      }, [])


    const authInfo = {user , loading, createUser, singInUser,updateUserProfile,singInGoogle,singInGithub, LogOut}

    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}