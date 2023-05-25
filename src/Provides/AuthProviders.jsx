import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    ////name image part
    const updateProfile1 = (displayName,photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL:photoURL
        });
    };
    //name part end 
    const authInfo = {
        user,
        createUser,
        updateProfile1
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;