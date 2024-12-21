import React, { useState } from 'react';

function Counter({ initialValue, step }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  return (
    <div style={{ margin: '1rem', textAlign: 'center' }}>
      <h2>Counter</h2>
      <p>Current Value: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ marginLeft: '1rem' }}>-</button>
    </div>
  );
}

export default Counter;
