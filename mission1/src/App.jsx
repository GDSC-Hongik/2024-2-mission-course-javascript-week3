import { useState } from "react";
import Counter from "./Counter.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <Counter count={count} />
        <button onClick={dec}>-</button>
        <button onClick={reset}>초기화</button>
        <button onClick={inc}>+</button>
      </div>
    </>
  );
}

export default App;
