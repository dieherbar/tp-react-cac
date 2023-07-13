// components/TaskList.js
import React from 'react';
import Checkbox from './checks/Checkboxes';
import styles from '@/styles/Button.module.css';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title}
          <button className={styles.boton} onClick={() => deleteTask(task.id)}>Eliminar</button>
          <Checkbox label='Tarea completada'></Checkbox>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
