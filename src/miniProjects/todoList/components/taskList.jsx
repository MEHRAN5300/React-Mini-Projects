import React from 'react'
import TaskItem from './taskItem'

const taskList = ({deleteTask, toggleTask, filterTasks}) => {
  return (
    <div className="task-list">
        {filterTasks.map((item, index)=>(
            <TaskItem item={item} index={index} deleteitem={deleteTask} toggleCheck={toggleTask}/>
        ))}
    </div>
  )
}

export default taskList