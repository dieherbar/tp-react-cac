import Head from 'next/head'
//import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Boton from '@/components/buttons/loginBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from '@/components/navBar/barra';
import Titulo from '@/components/headers/titles';
import Parrafo from '@/components/ParrafoRelleno';


//const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = title => {
    const newTask = {
      id: Date.now(),
      title
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <>
    <Head>
      <title>Task List</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"/>
    </Head> 
    
    <div>
      <Barra></Barra>
      <br/>
      <Parrafo />
      <Boton />
      <Titulo title="Lista de tareas (props)"></Titulo>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  </>
  );
};

export default HomePage;

