import React, { useState } from 'react';

function Counter({ initialValue, step }) {
  const [count, setCount] = useState(initialValue);

  const inc = () => setCount(count + step);
  const dec = () => setCount(count - step);
  const reset = () => setCount(initialValue);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={inc}>+{step}</button>
      <button onClick={reset}>Reset</button>
      <button onClick={dec}>-{step}</button>
    </div>
  );
}

export default Counter;