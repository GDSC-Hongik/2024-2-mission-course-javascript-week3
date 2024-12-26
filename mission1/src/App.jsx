import { useState } from 'react'
import Viewer from './Viewer';
import Counter from './Counter';
import './App.css'

function App() {
  const [number, setCount] = useState(0);
  const HandleSetCount = (val) => {
    setCount(number + val);
  };

  return (
    <div className="App">
      <h1>카운터</h1>
      <section>
        <Viewer number={number} />
      </section>

      <section>
        <Counter HandleSetCount={HandleSetCount}/>
      </section>
    </div>
  )
}

export default App;


