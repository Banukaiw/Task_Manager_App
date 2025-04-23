import './posttask.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostTask = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to Home and pass the task data
    navigate('/', { state: { newTask: task } });

    // Clear form (optional, since we navigate away)
    setTask({ title: '', description: '', dueDate: '', priority: '' });
  };

  return (
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

        <button type="submit" className="submit-button">
          Post Task
        </button>
      </form>
    </div>
  );
};

export default PostTask;
