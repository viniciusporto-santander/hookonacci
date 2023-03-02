import { Spacer } from "../spacer/Spacer";

export function Header() {
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
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
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
    </header>
  );
}
