import React from 'react'

const todoFooter = ({remaningTask, tasks, clearCompleteTask}) => {
  return (
    <div className="todo-footer">
        <span>{remaningTask.length} tasks remaining</span>
        <button className="clear-btn" onClick={()=>clearCompleteTask(tasks)}>Clear Completed</button>
    </div>
  )
}

export default todoFooter