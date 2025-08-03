import { createContext, useState } from "react";
import PopUp from "../components/PopUp";

export const PopUpContext = createContext();

export default function PopUpProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleShowModal(){
    if(isOpen){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  }
  return (
    <>
      <PopUpContext.Provider value={{ isOpen,setIsOpen,handleShowModal }}>
        {children}
      </PopUpContext.Provider>
      
    </>
  );
}
