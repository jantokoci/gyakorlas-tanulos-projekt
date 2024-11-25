import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0);
    
    const increment = () => {
        //Here is an updater function if we use it like in the decrement state its only update once
        //Here in the increment state is the correct solution => arrow function (c is a short way to use count)
        setCount(c => c + 1) 
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(count - 1)
        //setCount(count - 1)
        //setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }
    
    return(
        <div className='counter-container'>
            <h1>Counter App</h1>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>-</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>+</button>
        </div>
    );
}

export default Counter