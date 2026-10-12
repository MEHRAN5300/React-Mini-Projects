import React from 'react'

const progressBar = ({completdTask, tasks, progressvalue}) => {

    console.log(completdTask.length);
    console.log(tasks.length);

  return (
    <>
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
    </>
  )
}

export default progressBar