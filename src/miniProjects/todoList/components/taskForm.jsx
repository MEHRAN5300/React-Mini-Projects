import React from 'react'

const taskForm = ({task, addTask, setTask}) => {

  console.log(task);
  return (
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
  )
}

export default taskForm