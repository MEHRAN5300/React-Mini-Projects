import React from 'react'

const taskFilter = ({tasks, setFilter, filter}) => {
  return (
    <div className="tasks-topbar">
        <h3>My Tasks <span>{tasks.length}</span></h3>

        <div className="task-filters">
            <button className={`filter-btn ${filter == 'all' ? 'active': ''}`} onClick={()=> setFilter('all')}>All</button>
            <button className={`filter-btn ${filter == 'active' ? 'active': ''}`} onClick={()=> setFilter('active')}>Active</button>
            <button className={`filter-btn ${filter == 'completed' ? 'active': ''}`} onClick={()=> setFilter('completed')}>Completed</button>
        </div>
     </div>
  )
}

export default taskFilter