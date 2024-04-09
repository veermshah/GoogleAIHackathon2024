//Counter.jsx
import React, { useState } from 'react';
//import Button from '@mui/material/Button';

function Counter(props) {
    let [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return(
        <div style={{textAlign: 'center'}}>
            <h3>Counter App</h3>
            <div>
                <button onClick={decrement}>-</button>
                <span> {count} </span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default Counter;