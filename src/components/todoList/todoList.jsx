import React from 'react'
import { useState } from 'react'
import './todolist.css'

const todoList = () => {

// ***********************************************
//   States Useed in this Todo List
// ***********************************************
  const [task,setTask ] = useState('');
  const [tasks,setTasks ] = useState([]);
  const [filter, setFilter] = useState('all');


// ***********************************************
//   Filter Conditions
// ***********************************************
  let filterTasks = tasks;

  if ( filter === 'active' ){
    filterTasks = tasks.filter((items)=> items.iscompleted === false);
  }

  if ( filter === 'completed' ){
    filterTasks = tasks.filter((items)=> items.iscompleted === true);
  }


// ***********************************************
//   Add Task Function
// ***********************************************
  const addTask = () => {
    if(task.trim() === ''){
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      text: task.trim(),
      iscompleted: false
    }

    setTasks([...tasks, newTask])
    setTask('');
  }

// ***********************************************
//   Delete Task Function
// ***********************************************
  const deleteTask = (TaskID) => {
    
    const updatedTasks = tasks.filter((item, index) => item.id !== TaskID);
    setTasks(updatedTasks)

  }

// ***********************************************
//   Clear All Completed task Function
// ***********************************************
  const clearCompleteTask = () =>{

    const updatecompletdTask = tasks.filter((item) => item.iscompleted !== true);
    setTasks(updatecompletdTask)
  }

  const progressvalue = (doneTask, totalTask)=>{

    const percent = (doneTask/totalTask)*100;
    return percent;

  }

// ***********************************************
//   Mark Task As Completed Function
// ***********************************************
  const toggleTask = (taskID) => {

    const updatedTask = tasks.map((item)=> {

      if(item.id === taskID){
        return{
          ...item, iscompleted:!item.iscompleted
        };
      }

      return item

    });
    setTasks(updatedTask);

  }


// ***********************************************
//   Task Calculation Like remaning and other
// ***********************************************
  const completdTask = tasks.filter((item)=> item.iscompleted === true);
  const remaningTask = tasks.filter((item)=> item.iscompleted === false);
  

  

  return (
    <div className="todo-page">
      <div className="todo-container">

        <header className="todo-header">
          <div className="header-icon">✓</div>
          <span className="header-label">MY WORKSPACE</span>
          <h1>My To-Do List</h1>
          <p>Stay organized and make every day productive.</p>
        </header>

        <div className="todo-card">

          <div className="progress-section">
            <div>
              <h2>Today's Progress</h2>
              <p>Keep going! You've got this.</p>
            </div>
            <div className="progress-count">{completdTask.length} / {tasks.length}</div>
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{width:`${progressvalue(completdTask.length, tasks.length)}%`}}></div>
          </div>

          <div className="task-form">
            <input
              type="text"
              placeholder="What do you need to do?"
              className="task-input"
              value={task}
              onChange={(e)=> setTask(e.target.value)}
            />
            <button className="add-btn" onClick={addTask}>+ Add Task</button>
          </div>
          <div className="tasks-topbar">
            <h3>My Tasks <span>{tasks.length}</span></h3>

            <div className="task-filters">
              <button className={`filter-btn ${filter == 'all' ? 'active': ''}`} onClick={()=> setFilter('all')}>All</button>
              <button className={`filter-btn ${filter == 'active' ? 'active': ''}`} onClick={()=> setFilter('active')}>Active</button>
              <button className={`filter-btn ${filter == 'completed' ? 'active': ''}`} onClick={()=> setFilter('completed')}>Completed</button>
            </div>
          </div>

          <div className="task-list">
            {filterTasks.map((item, index)=>(
              <div className={`task-item ${item.iscompleted ? 'completed' : ''} `} Key={item.id}>
                <label className="task-check">
                  <input type="checkbox" checked={item.iscompleted} onChange={()=>toggleTask(item.id)}/>
                  <span className="checkmark"></span>
                </label>
                <div className="task-content">
                  <p>{item.text}</p>
                </div>
                <button className="delete-btn" onClick={()=>deleteTask(item.id)}>✕</button>
              </div>
            ))}
          </div>

          <div className="todo-footer">
            <span>{remaningTask.length} tasks remaining</span>
            <button className="clear-btn" onClick={()=>clearCompleteTask(tasks)}>Clear Completed</button>
          </div>

        </div>

        <p className="bottom-text">Small steps every day lead to big results ✨</p>
      </div>
    </div>
  )
}

export default todoList