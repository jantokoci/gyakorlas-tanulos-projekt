import { useState } from "react"


function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")
    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div className="colorpicker-container">
            <h1 className="felirat">Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label className="felfelirat">Select a Color:</label>
            <input className="inputalas" type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker