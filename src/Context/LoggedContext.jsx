import { createContext,  useState } from "react";

export const LoggedContext = createContext();

export function LoggedContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <LoggedContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoggedContext.Provider>
  );
}
