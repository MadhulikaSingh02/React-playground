import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(3);

  function incrementValue() {
    //Increment Value by 2 to understand update function
    console.log("Inside incrementValue", counter);
    if (counter < 10) {
      setCounter((counter) => counter + 1);
      //setCounter((counter) => counter + 1);
    } else {
      setCounter(3);
    }
  }
  const decrementValue = () => {
    console.log("Inside decrementValue", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(3);
    }
  };
  return (
    <>
      <h1>Counter {counter}</h1>
      <button type="button" onClick={incrementValue}>
        Increment-{counter}
      </button>
      <button type="button" onClick={decrementValue}>
        Decrement-{counter}
      </button>
    </>
  );
}

export default App;
