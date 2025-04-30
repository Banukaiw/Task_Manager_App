// PostTask.js
import './posttask.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'; // Modified: Import useNavigate

// Modified: handlePost prop (this is the addTask function from App.js)
const PostTask = ({ handlePost }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [noteText,setNotetext] = useState('');
  // const handleChange =(event)=>{
  // setNotetext(event.target.value)
  // }

  // const handleSaveClick =()=>{

  // }
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Normal",
  });

  // Modified: Get the navigate function
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePost(task); // Modified: Call the handlePost (addTask) prop with the task data
    setTask({ title: "", description: "", dueDate: "", priority: "Normal" }); // Reset form
    // Modified: Navigate back to the home page after submitting
    navigate('/');
  };

  return (
    <>
    <div className="homenav">
        <Link to="/home" className="title">
          Todo list
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/newpost">
          <button className="postbutton">Post Task</button>
        </Link>
      </div>
    <div className="form-container">
      <h2>Post a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Enter task title"
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Enter task description"
          rows="4"
          required
        />

        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />

        <label>Priority</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>

        <button type="submit" className="submit-button">Post Task</button>
      </form>


      {/* <button onClick={handleSaveClick} className='save'>Save</button> */}
    </div>
    </>
  )
}

export default PostTask