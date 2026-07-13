import { useState } from "react"; //React tool to store and update values inside the app.
import "./App.css"; //Bring styles (CSS file) to make the calculator look nice.

export default function App() {
  //This is calculator app. export default means you can use this function in other files.
  const [num1, setNum1] = useState(""); //num1 → stores the first number you type.
  const [num2, setNum2] = useState(""); //num2 → stores the second number you type.
  const [result, setResult] = useState(""); //result → stores the answer after calculation.
  //setNum1, setNum2, setResult → functions to change those values.

  const calculate = (operator) => {
    //calculate(operator) → runs when you click a math button (+ - * /).
    const n1 = parseFloat(num1); //parseFloat(num1) → turns text input into number.
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      //isNaN → checks if the value is not a number.
      setResult("Please enter numbers"); //If wrong, it shows "Please enter numbers".
      return;
    }

    switch (operator) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by 0"); //Divide (but check if n2 is not 0).
        break;
      default: //For safety, shows "Error".
        setResult("Error");
    }
  };

  return (
    //Return (the UI part)
    <div className="container">
      <div className="calculator">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />

        <div className="buttons">
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("*")}>*</button>
          <button onClick={() => calculate("/")}>/</button>
        </div>

        <div className="result">Result: {result}</div>
        <p className="paragraph">@Jade Khim</p>
      </div>
    </div>
  );
}
