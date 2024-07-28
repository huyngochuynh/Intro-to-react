import React, { useState } from 'react'
import "./App.css"

function App() {
    const [count, setCount] = useState(0);
    let Color = (count > 0) ? "green" : (count < 0) ? "red" : "blue" ;

const decrement = () => { setCount (count - 1)};
const increment = () => { setCount (count + 1) };
const resetCount = () => { setCount (0)};

 return (
    <div className="container">
        <h1>Couter</h1>
        <span style={{color: Color}} id="value">{count}</span>
        <div>
          <button onClick={decrement} className="btn btn-decrease">DECREASE</button>
          <button onClick={resetCount} className="btn btn-reset">RESET</button>
          <button onClick={increment} className="btn btn-increase">INCREASE</button>
        </div>
    </div>
    )
}
export default App;