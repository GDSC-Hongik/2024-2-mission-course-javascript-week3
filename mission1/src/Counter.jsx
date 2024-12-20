import { useState } from 'react';

function Counter({props, props2}){
    const [count, setCount] = useState(props);

    return(
        <div>
            <button onClick={()=>{setCount(count + props2);}}>+</button>
            <button onClick={()=>{setCount(count - props2);}}>-</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Counter