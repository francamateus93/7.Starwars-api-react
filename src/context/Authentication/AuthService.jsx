import { auth } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthService = {
  login: (email, password) => signInWithEmailAndPassword(auth, email, password),
  signup: (email, password) =>
    createUserWithEmailAndPassword(auth, email, password),
  logout: () => signOut(auth),
};
