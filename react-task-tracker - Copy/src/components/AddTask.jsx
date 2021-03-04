import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!Text) {
			alert('please add a task');
		}
		onAdd({ text, day, reminder });
		setText('');
		setDay('');
		setReminder(false);
	};
	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label htmlFor="">Task</label>
				<input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			<div className="form-control">
				<label htmlFor="">Day & Time</label>
				<input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
			</div>
			<div className="form-control form-control-check">
				<label htmlFor="">Set Reminder</label>
				<input
					type="checkbox"
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
					checked={reminder}
				/>
			</div>
			<input type="submit" value="save Task" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
