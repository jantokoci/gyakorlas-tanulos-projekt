import React, {useState} from 'react'

function MyComponent() {
    const [name, setName] = useState("Guest");
    const updateName = () => {
        setName("Jocika");
    }

    const [age, setAge] = useState(0);
    const incrementAge = () => {
        setAge(age + 1);
    }
    const decreaseAge = () => {
        setAge(age - 1);
    }

    const [isEmployed, setIsEmployed] = useState(false);
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>+</button>
            <button onClick={decreaseAge}>-</button>

            <p>Employed: {isEmployed ? 'yes' : 'no'}</p>
            <button onClick={toggleEmployedStatus}>Status Refresh</button>
        </div>
    )
}

export default MyComponent