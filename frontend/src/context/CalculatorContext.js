import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    exp: "",
  });

  const providerValue = {
    calc,
    setCalc,
  };

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
