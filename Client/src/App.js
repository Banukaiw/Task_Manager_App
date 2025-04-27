/* import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import PostTask from './components/PostTask/PostTask';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/newpost" element={<PostTask/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
 */


import React, { useState, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import { nanoid } from 'nanoid';
import './App.css';

import Home from './components/Home/Home';
import PostTask from './components/PostTask/PostTask';
import Register from './components/Register/Register';
import Navbar from "./components/Navbar/Navbar"
import Login from './components/Login/Login';
//import DashBoard from './components/DashBord/DashBoard';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks-data');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks-data', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (taskData) => {
    const date = new Date();
    const newTask = {
      id: nanoid(),
      ...taskData,
      createdDate: date.toLocaleDateString(),
    };
    setTasks([...tasks, newTask]);
    console.log("Task added:", newTask);
  };

  /* const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }; */

  return (
    // Modified: Removed the Router wrapper - it should be in index.js
    <div className="app-container">
      {/* Modified: Keep the Routes here */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
       {/*  <Route path="/dashboard" element={<DashBoard tasks={tasks} />} /> */}
        {/* Note: useNavigate is used in PostTask, not directly here,
             so importing it here is okay but not strictly necessary if only used in child.
             However, it doesn't hurt. */}
        <Route path="/newpost" element={<PostTask handlePost={addTask} />} />
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
   
  );
}

export default App;