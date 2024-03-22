import { useState } from "react"
import { MoveDown, Trash2 } from 'lucide-react';
import { MoveUp } from 'lucide-react';
function TaskApp(){

  const [task, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")


  function handleInputChange(e){
    setNewTask(e.target.value)

  }

  function addTask(){
      if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask])
        setNewTask("")
  }else{
    alert("Fill the Input")
  }

      }

  function DeleteTask(index){

    const updatedTasks = task.filter((_, i) => i !== index)
    setTasks(updatedTasks)

  }

  function MoveTaskUp(index){
            if(index > 0){
              const updatedTasks = [...task];
              [updatedTasks[index], updatedTasks[index - 1]] = 
              [updatedTasks[index - 1], updatedTasks[index]] 
              setTasks(updatedTasks)
            }
  }

  function MoveTaskDown(index){
                if(index < task.length - 1){
              const updatedTasks = [...task];
              [updatedTasks[index], updatedTasks[index + 1]] = 
              [updatedTasks[index + 1], updatedTasks[index]] 
              setTasks(updatedTasks)
            }

  }

  return(
          <div className="to-do-list">
                  <h1>To-Do-List</h1>

                  <div className="">
                    <input 
                    type="text" 
                    value={newTask}
                    placeholder="Enter a Task..."
                    onChange={handleInputChange}
                    />
                    <button className="add-button" onClick={addTask}>Add</button>
                  </div>

          <ol>
              {task.map((task, index) => 
                        <li key={index}>
                          <span className="text">{task}</span>

                          <button 
                          onClick={() => DeleteTask(index)}
                          className="delete-button"> 
                          <Trash2/> </button>

                          <button 
                          onClick={() => MoveTaskUp(index)}
                          className="move-button"> 
                          <MoveUp/> </button>
                          
                          <button 
                          onClick={() => MoveTaskDown(index)}
                          className="move-button"> 
                          <MoveDown/> </button>

                        </li> 
              )}
          </ol>


          </div>
  )

}

export default TaskApp