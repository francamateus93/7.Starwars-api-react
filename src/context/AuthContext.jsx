import { auth } from "../firebase/firebase";
import { createContext, useContext, useEffect, useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const initialState = {
  user: null,
  loading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "logout":
      return {
        ...state,
        user: anull,
        loading: false,
      };
    case "setUser":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "loading":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "setUser", payload: user });
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    dispatch({ type: "loading" });
    const response = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: "login", payload: response.user });
  };

  const signup = async (email, password) => {
    dispatch({ type: "loading" });
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch({ type: "login", payload: response.user });
  };

  const logout = async () => {
    dispatch({ type: "loading" });
    await signOut(auth);
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{ user: user.state, login, signup, logout, loading: user.state }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
