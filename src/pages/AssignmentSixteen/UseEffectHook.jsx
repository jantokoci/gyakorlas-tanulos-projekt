import { useEffect, useState } from "react";


function UseEffectHook () {
    //FIRST PART
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    // useEffect((function), [dependecies])
    //update every time when the add button is clicked, if we give dependecies, only the first time
    useEffect(() => {document.title = `Count: ${count} ${color}`}, [count]) //[if we not add color to the dependecies, then the count wont be changing]

    function addCount(){
        setCount(c => c+1)
    }

    function minusCount(){
        setCount(c => c-1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    //SECOND PART
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=>{window.addEventListener("resize", handleResize);
                    console.log('EVENT LISTENER ADDED')
                
                
                return() => {
                    window.removeEventListener("resize", handleResize)
                    console.log('EVENT LISTENER REMOVED')
                }}, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    })

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        //FIRST PART
        <>
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>add</button>
            <button onClick={minusCount}>subtract</button><br />
            <button onClick={changeColor}>Change color</button>
        </div>
        {/*SECOND PART*/}
        <div>
            <p>window width: {width}px</p>
            <p>window height: {height}px</p>
        </div>
        </>
        
        
    )
}

export default UseEffectHook;