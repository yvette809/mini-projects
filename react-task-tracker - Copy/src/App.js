import { useState } from 'react';
import Header from './components/Header';
// import Task from './components/TaskWithD'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'Feb 5th at 2.0pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Push to Heroku',
			day: 'Feb 9th at 5.0pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Report on arbetesformedlingen',
			day: 'March 5th at 8.0pm',
			reminder: false,
		},
	]);

	// ADDTask

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = {
			id,
			...task,
		};
		console.log('NEW TASK', newTask);
		setTasks(...tasks, newTask);
	};

	// delete task

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle Reminder

	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};
	return (
		<div className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				<h1>No task to Show</h1>
			)}
		</div>
	);
}

export default App;
