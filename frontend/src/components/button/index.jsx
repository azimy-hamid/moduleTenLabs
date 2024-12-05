import React from "react";
import "./index.css";
import { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";
import { fetchOperation } from "../../services/fetchCalculatorOperations";
const getStyleClass = (btn) => {
  const className = {
    "=": "equals",
    "*": "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };

  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalculatorContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      exp: !calc.exp.toString().endsWith(".") ? calc.exp + value : calc.exp,
    });
  };

  const resetClick = () => {
    setCalc({
      exp: "",
    });
  };

  const handleNumberClick = () => {
    const stringNumber = value.toString();

    let numberValue;
    if (stringNumber === "0" && calc.exp === "0") {
      setCalc({
        ...calc,
        exp: "0",
      });
    } else {
      setCalc({
        ...calc,
        exp: calc.exp + stringNumber,
      });
    }
  };

  const signClick = () => {
    const endsWithOperator = /[+\-*/]$/.test(calc.exp);

    setCalc({
      ...calc,
      exp: !endsWithOperator ? calc.exp + value : calc.exp,
    });
  };

  const equalsClick = async () => {
    const result = await fetchOperation(calc.exp);

    setCalc({
      ...calc,
      exp: result,
    });
  };

  const handleClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "*": signClick,
      "+": signClick,
      "-": signClick,
      "/": signClick,
      "=": equalsClick,
    };

    if (results[value]) {
      return results[value]();
    } else {
      return handleNumberClick();
    }
  };

  return (
    <button onClick={handleClick} className={`${getStyleClass(value)} button`}>
      {value}
    </button>
  );
};

export default Button;
