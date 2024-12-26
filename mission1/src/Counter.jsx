import './Counter.css'

const Counter = ( {HandleSetCount }) => {
    return (
        <div className = "Counter">
            <button onClick={ () => HandleSetCount(-10)}>-10</button>
            <button onClick={ () => HandleSetCount(-5)}>-5</button>
            <button onClick={ () => HandleSetCount(-1)}>-1</button>
            <button onClick={ () => HandleSetCount(+1)}>+1</button>
            <button onClick={ () => HandleSetCount(+5)}>+5</button>
            <button onClick={ () => HandleSetCount(+10)}>+10</button>
        </div>
    )
}

export default Counter;