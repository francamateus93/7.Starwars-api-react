import { auth } from "../../firebase/firebase";
import { createContext, useContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthService } from "./authService";

const initialState = {
  user: null,
  loading: true,
};

// AUTHENTICATION REDUCER
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
        user: null,
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
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "setUser", payload: user });
    });

    return unsubscribe;
  }, []);

  // AUTHENTICATION LOGIC
  const login = async (email, password) => {
    dispatch({ type: "loading" });
    const response = await AuthService.login(email, password);
    dispatch({ type: "login", payload: response.user });
    navigate("/starships");
  };

  const signup = async (email, password) => {
    dispatch({ type: "loading" });
    const response = await AuthService.signup(email, password);
    dispatch({ type: "login", payload: response.user });
    navigate("/starships");
  };

  const logout = async () => {
    await AuthService.logout();
    dispatch({ type: "logout" });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, signup, logout, loading: state.state }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
