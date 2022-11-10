import { createContext, useEffect, useState } from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './routes/routes';
import {createUserWithEmailAndPassword, signInWithPopup, updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from './Firebase/Firebase.config';
import { Toaster } from 'react-hot-toast';
import './App.css';


export const AuthContext = createContext();
const auth = getAuth(app);


function App() {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, number)=>{
      setLoading(true);
     return updateProfile(auth.currentUser, {
        displayName: name, phoneNumber: number
      })
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerLogin = (provider) => {
      setLoading(true);
      return signInWithPopup (auth, provider);
  }



    const logOut = () =>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        updateUser,
        loading,
        createUser, 
        login, 
        providerLogin,
        logOut
    }
  return (
    <>
      <AuthContext.Provider value={authInfo}>
        <Toaster position="top-center" reverseOrder={false}/>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
