import React from 'react';
import { useState } from 'react';
import Newtodos from './Newtodos';

export default function TodoList() {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Do laundry', completed: false },
      { id: 3, text: 'Clean the house', completed: true },
    ]);
  
    const handleTaskClick = (id) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <li 
              key={task.id}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => handleTaskClick(task.id)}
            >
              {task.text}
            </li>
          ))}
        </ul>
        <Newtodos tasks={tasks} setTasks={setTasks} />
      </div>
    );
  }