"use client"
import { createContext, useContext, useState } from "react";

const StatesContext = createContext();

export const StatesContextProvider = ({children}) => {
  const [activeLink, setActiveLink] = useState("");
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(["Todas"]);

  const states = {
    activeLink, setActiveLink,
    products, setProducts,
    categories, setCategories
  };

  return (
    <StatesContext.Provider value={states}>
      {children}
    </StatesContext.Provider>
  );
};

export const useStatesContext = () => useContext(StatesContext);