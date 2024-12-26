import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ initialValue, changeAmount }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + changeAmount);
  };

  const decrement = () => {
    setCount(count - changeAmount);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
  changeAmount: PropTypes.number.isRequired,
};

export default Counter;
