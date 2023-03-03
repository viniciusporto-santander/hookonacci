import { Dispatch, SetStateAction } from "react";
import { Spacer } from "../spacer/Spacer";

export type Event = { preventDefault: () => void };
type Operation = "+" | "-";

type Props = {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  displayNumber: number;
  setDisplayNumber: Dispatch<SetStateAction<number>>;
};

export function Header(props: Props) {
  // should not go negative
  function addOrSubtract(e: Event, operation: Operation) {
    e.preventDefault();
    operation === "+"
      ? props.setDisplayNumber(props.displayNumber + 1)
      : props.setDisplayNumber(props.displayNumber - 1);
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    props.setDisplayNumber(parseInt(props.userInput));
  }

  return (
    <header className="App-header">
      <h1>Fibonacci hook</h1>
      <form>
        <label>
          Enter a number:
          <div>
            <input
              type="number"
              autoFocus
              value={props.userInput}
              onChange={(e) => props.setUserInput(e.target.value)}
            ></input>
            <Spacer></Spacer>
            <button onClick={handleSubmit}>Submit</button>
            <Spacer></Spacer>
          </div>
        </label>
      </form>
      <button
        style={{ width: "50px", justifyContent: "center" }}
        onClick={(e) => addOrSubtract(e, "+")}
      >
        +
      </button>
      <Spacer></Spacer>
      <button
        style={{ width: "50px", justifyContent: "center" }}
        onClick={(e) => addOrSubtract(e, "-")}
      >
        -
      </button>
      <p>You entered: {props.displayNumber}</p>
    </header>
  );
}
