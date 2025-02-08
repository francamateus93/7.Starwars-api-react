import { auth } from "../../firebase/firebase";
import { createContext, useContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthService } from "./authService";

const initialState = {
  user: null,
  loading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, loading: false };
    case "logout":
      return { ...state, user: null, loading: false };
    case "setUser":
      return { ...state, user: action.payload, loading: false };
    case "loading":
      return { ...state, loading: true };
    default:
      return state;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "setUser", payload: user });
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      dispatch({ type: "loading" });
      const response = await AuthService.login(email, password);
      dispatch({ type: "login", payload: response.user });
    } catch (error) {
      throw new Error(error.code);
    }
  };

  const signup = async (email, password) => {
    try {
      dispatch({ type: "loading" });
      const response = await AuthService.signup(email, password);
      dispatch({ type: "login", payload: response.user });
    } catch (error) {
      throw new Error(error.code);
    }
  };

  const logout = async () => {
    await AuthService.logout();
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        signup,
        logout,
        loading: state.loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
