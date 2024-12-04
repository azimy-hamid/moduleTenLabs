import React from "react";
import "./index.css";
import { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";

const CalculatorScreen = () => {
  const { calc } = useContext(CalculatorContext);

  return <div className="calculator-screen">{calc.exp ? calc.exp : ""}</div>;
};

export default CalculatorScreen;
