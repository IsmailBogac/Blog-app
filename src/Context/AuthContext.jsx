import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedContext } from "./LoggedContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Authentication/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Authentication/FireBase";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const { setIsLogged } = useContext(LoggedContext);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const local = localStorage.getItem("isLogged");
    if (local === "true") {
      setIsLogged(true);
    }
  }, []);

  function handleLogout() {
    signOut(auth);
    localStorage.setItem("isLogged", "false");
    setIsLogged(false);
  }
  return (
    <AuthContext.Provider value={{ handleLogout, user, userData }}>
      {children}
    </AuthContext.Provider>
  );
}
