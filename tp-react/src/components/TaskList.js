// components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
