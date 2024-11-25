import { useState } from "react"


function ToDoList() {
    
    const [tasks, setTasks] = useState(["Eat", "Shower", "Dog"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        
        if(newTask.trim() !== ""){
        
        setTasks(t => [...t, newTask])
        setNewTask("")
        }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.lenght - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
        <div className="to-do-list">
            <h1 className="ocskos">To-Do-List</h1>

            <div>
                <input  className="irdbe"
                        type="text"
                        placeholder="enter a task..."
                        value={newTask}
                        onChange={handleInputChange}/>
                <button className="add-button"
                        onClick={addTask}>
                    Add
                </button>
            </div>

            <ol className="nagylist">
            {
                tasks.map((task, index) =>
                <li className="kislist" key={index}><span className="text">{task}</span>
                <button className="delet-button" onClick={() => removeTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>⬆️</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>⬇️</button></li>)
            }
            </ol>

        </div>
        </>
    )
}

export default ToDoList