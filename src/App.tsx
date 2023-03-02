import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Spacer } from "./components/spacer/Spacer";
import { useFibonacci } from "./hooks/UseFibonacciHook";

type Event = { preventDefault: () => void };
type Operation = "+" | "-";

function App() {
  const [userInput, setUserInput] = useState<string>("");

  const [displayNumber, setDisplayNumber] = useState(0);

  const fibonacciSequence = useFibonacci(displayNumber);

  // edge cases: 'e' and submitting empty field
  // should not accept negative numbers, 'e'(by itself), undefined or empty space
  function handleSubmit(e: Event) {
    e.preventDefault();
    setDisplayNumber(parseInt(userInput));
  }

  function addOrSubtract(e: Event, operation: Operation) {
    e.preventDefault();
    operation === "+"
      ? setDisplayNumber(displayNumber + 1)
      : setDisplayNumber(displayNumber - 1);
  }
  console.log("Sequence updated", fibonacciSequence);
  return (
    <>
      <div className="App">
        <p>You entered: {displayNumber}</p>
        <Header></Header>
        <p>Result:</p>
        <p>{fibonacciSequence.join(",")}</p>
      </div>
    </>
  );
}

export default App;
