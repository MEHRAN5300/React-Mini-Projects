import React from 'react'

const taskItem = ({item, index, deleteitem, toggleCheck}) => {
  // console.log(item);
  return (
    <div className={`task-item ${item.iscompleted ? 'completed' : ''} `} Key={item.id}>
        <label className="task-check">
            <input type="checkbox" checked={item.iscompleted} onChange={()=>toggleCheck(item.id)}/>
            <span className="checkmark"></span>
        </label>
        <div className="task-content">
            <p>{item.text}</p>
        </div>
        <button className="delete-btn" onClick={()=>deleteitem(item.id)}>✕</button>
    </div>
  )
}

export default taskItem