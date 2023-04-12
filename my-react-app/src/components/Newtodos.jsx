import React from 'react';
import { useState } from 'react';

export default function Newtodo({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      const newTaskObject = { id: tasks.length + 1, text: newTask, completed: false };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTask} onChange={handleNewTaskChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}