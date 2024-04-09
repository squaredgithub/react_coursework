import React, { useState } from 'react'
import Task from './Task';

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [adtask, setAdTask] = useState("");

    const handleChange = (event) => {
        setAdTask(event.target.value);
      }; 

      const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskAd : adtask,
            completed: false,
        };
        setTodoList([...todoList, task]);
      };

      const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id)); 
        // const newTodoList = todoList.filter((task) => {
        //     if(task === taskAd) {
        //         return false
        //     }else {
        //         return true;
        //     }
        // } )
        // setTodoList(newTodoList);
      };
      const completeTask = (id) => {
        setTodoList(
          todoList.map((task) => {
            if (task.id === id) {
              return { ...task, completed: true};
            } else {
              return task;
            }
          }
          )
        );
      }

  return (
    <div className='Todo'> 
        <div className='addTask'>
            <input onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
        </div>

        <div className='list'>
            {todoList.map((task) => {
                return(
                <Task
                 taskAd ={task.taskAd} 
                 id={task.id}
                 deleteTask={deleteTask}
                 completeTask = {completeTask}
                 />
                ) 
            })}
        </div>
    </div>
  )
}

export default Todo