import { createContext, useState } from "react";

export const InputDataContext = createContext();

export function InputDataProvider({ children }) {
  const [inputData, setInputData] = useState({
    title: "",
    content: "",
    category: "",
    img: null,
  });

  return (
    <InputDataContext.Provider value={{ inputData, setInputData }}>
      {children}
    </InputDataContext.Provider>
  );
}
