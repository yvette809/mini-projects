import React, {useState} from 'react'
import Task from './Task'



const Tasks = ({tasks, onDelete, onToggle, onAdd}) => {
   

    return (
        <>
        {tasks.map((task)=>(
           <Task  key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}  />
        ))}
            
        </>
    )
}

export default Tasks
