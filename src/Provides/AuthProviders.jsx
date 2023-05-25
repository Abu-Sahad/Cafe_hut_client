import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "react";

const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;