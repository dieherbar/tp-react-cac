// components/TaskForm.js
import React, { useState } from 'react';
import styles from '@/styles/Button.module.css'

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
      <>
      <div>
   {<form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Ingrese una tarea"
        />
      <button type="submit" className={styles.boton}>Agregar Tarea</button>
    </form> }
        </div>
  </>
  );
};

export default TaskForm;
