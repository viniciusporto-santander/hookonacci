import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState<string>("");

  const [displayNumber, setDisplayNumber] = useState(0);

  let fibonacciSequence: number[] = [];

  function handleSubmit(e: any) {
    e.preventDefault();

    setDisplayNumber(parseInt(userInput));
  }

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

    for (let i = 0; i <= displayNumber; i++) {
      if (i === 0 || i === 1) {
        fibonacciSequence.push(i);
      } else {
        fibonacciSequence.push(
          fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
        );
      }
    }
    console.log(fibonacciSequence);
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
            <p>{displayNumber}</p>
            <button onClick={addNumber}>+</button>
            <button onClick={subtractNumber}>-</button>
            <button onClick={calculateFibonacci}>Calculate</button>
          </label>
          <br />
        </form>

        <p>{fibonacciSequence}</p>
      </header>
    </div>
  );
}

export default App;
