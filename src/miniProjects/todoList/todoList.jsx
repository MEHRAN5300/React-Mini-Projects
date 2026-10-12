import React from 'react'
import { useState } from 'react'
import './todolist.css'
import TodoHeader from './components/todoHeader';
import TaskForm from './components/taskForm';
import TaskFooter from './components/todoFooter';
import ProgressBar from './components/progressBar';
import TaskList from './components/taskList';
import TaskFilter from './components/taskFilter';



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

  // console.log(tasks);

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

        <div className="todo-card">
            <TodoHeader />
            <TaskForm  task={task} addTask={addTask} setTask={setTask}/>
            <ProgressBar tasks={tasks} completdTask={completdTask} progressvalue={progressvalue}/>
            <TaskFilter tasks={tasks} setFilter={setFilter} filter={filter}/>
           { tasks.length !== 0 ? <TaskList filterTasks={filterTasks} deleteTask={deleteTask} toggleTask={toggleTask}/> : ''}            
            <TaskFooter remaningTask={remaningTask} tasks={tasks} clearCompleteTask={clearCompleteTask} />
        </div>

        <p className="bottom-text">Small steps every day lead to big results ✨</p>
      </div>
    </div>
  )
}

export default todoList