import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>React Counter App</h1>
      <Counter initialValue={0} step={1} />
      <Counter initialValue={10} step={5} />
    </div>
  );
}

export default App;
