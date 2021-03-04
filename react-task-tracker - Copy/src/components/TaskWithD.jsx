import React from 'react'


const tasks = [
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2.0pm',
        reminder: true

    },
    {
        id:2,
        text: 'Push to Heroku',
        day: 'Feb 9th at 5.0pm',
        reminder: true

    },
    {
        id:3,
        text: 'Report on arbetesformedlingen',
        day: 'March 5th at 8.0pm',
        reminder: false

    },
]
const Task = () => {

    return (
        <>
        {tasks.map((task)=>(
            <h3 key={task.id}>{task.text}</h3>
        ))}
            
        </>
    )
}

export default Task
