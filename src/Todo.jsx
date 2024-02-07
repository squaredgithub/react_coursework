import React, { useState } from 'react'

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [adtask, setAdTask] = useState("");

    const handleChange = (event) => {
        setAdTask(event.target.value);
      };

      const addTask = (event) => {
        const newTodoList = [...todoList, adtask];
        setTodoList(newTodoList);
      }

  return (
    <div className='Todo'>
        <div className='addTask'>
            <input onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
        </div>

        <div className='list'>
            {todoList.map((task) => {
                return(<div>
                    <h1>{task}</h1>
                    <button onClick={() => deleteTas(task) } > X </button>
                </div>
                ) 
            })}
        </div>
    </div>
  )
}

export default Todo