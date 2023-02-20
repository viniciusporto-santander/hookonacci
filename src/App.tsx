import { useState } from "react";
import "./App.css";
import { useFibonacci } from "./hooks/useFibonacci";

function App() {
  const [userInput, setUserInput] = useState<string>("");

  const [displayNumber, setDisplayNumber] = useState(0);

  // causing too many rerenders
  const fibonacciSequence = useFibonacci(displayNumber);

  function handleSubmit(e: any) {
    e.preventDefault();
    // edge cases: 'e' and submitting empty field
    // should not accept negative numbers, 'e'(by itself), undefined or empty space
    setDisplayNumber(parseInt(userInput));
  }
  // should be 1 func for both + and -
  function addNumber(e: { preventDefault: () => void }) {
    e.preventDefault();
    setDisplayNumber(displayNumber + 1);
  }

  function subtractNumber(e: { preventDefault: () => void }) {
    e.preventDefault();
    setDisplayNumber(displayNumber - 1);
  }

  function calculateFibonacci(e: { preventDefault: () => void }) {
    e.preventDefault();

    // should only use useFibonacci after clicking 'calculate' button
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fibonacci hook</h1>
        <form>
          <label>
            Type in a number:
            <br />
            <input
              type="number"
              autoFocus
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            ></input>
            <button onClick={handleSubmit}>Submit</button>
          </label>
        </form>

        <p>{displayNumber}</p>
        <button onClick={addNumber}>+</button>
        <button onClick={subtractNumber}>-</button>
        <button onClick={calculateFibonacci}>Calculate</button>
        <br />

        <p>{fibonacciSequence}</p>
      </header>
    </div>
  );
}

export default App;
