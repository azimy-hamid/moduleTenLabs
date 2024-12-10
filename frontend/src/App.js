import Button from "./components/button";
import ButtonBox from "./components/buttonBox/Index";
import Calculator from "./components/calculator";
import CalculatorScreen from "./components/calculatorScreen";
import CalculatorWrapper from "./components/calculatorWrapper";
import CalculatorProvider from "./context/CalculatorContext";

const calculatorButtons = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "*"], // First row
  ["4", "5", "6", "-"], // Second row
  ["1", "2", "3", "+"], // Third row
  ["0", ".", "="], // Fourth row
];
function App() {
  return (
    <CalculatorProvider className="App">
      <CalculatorWrapper>
        <CalculatorScreen />
        <ButtonBox>
          {calculatorButtons.flat().map((btn, index) => {
            return <Button value={btn} key={index} />;
          })}{" "}
        </ButtonBox>
      </CalculatorWrapper>
    </CalculatorProvider>
  );
}

export default App;
