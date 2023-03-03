import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { TriggerRender } from "./components/trigger-render/TriggerRender";
import { useFibonacci } from "./hooks/UseFibonacciHook";

function App() {
  const renders = useRef(0);
  // tracking renders
  useEffect(() => {
    renders.current = renders.current + 1;
    console.log("Rendered", renders.current);
  });

  const [userInput, setUserInput] = useState<string>("");

  const [displayNumber, setDisplayNumber] = useState<number>(0);

  const fibonacciSequence = useFibonacci(displayNumber);

  return (
    <>
      <div className="App">
        <Header
          userInput={userInput}
          setUserInput={setUserInput}
          displayNumber={displayNumber}
          setDisplayNumber={setDisplayNumber}
        />
        <TriggerRender></TriggerRender>
        <p>Result:</p>
        <p>{fibonacciSequence.join(",")}</p>
      </div>
    </>
  );
}

export default App;
