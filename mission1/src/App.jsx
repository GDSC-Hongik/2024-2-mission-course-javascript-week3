import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter initialValue={0} step={1} />
      <Counter initialValue={10} step={5} />
      <Counter initialValue={100} step={10} />
    </div>
  );
}

export default App;