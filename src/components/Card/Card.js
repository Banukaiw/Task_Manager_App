// Card.js
import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { faEnvelope } from '@fortawesome/free-solid-svg-icons' */
import { faPenToSquare, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

// Modified: Receive the task object as a prop
const Card = ({ task }) => {
  // Destructure task properties for easier access (optional but good practice)
  const { title, description, dueDate, priority } = task; // Modified: Destructure task properties

  return (
    <div className="card">
      <div className="card-content">
        {/* Modified: Display task title */}
        <span className="card_title">{title}</span>
        {/* Modified: Display task description */}
        <p className="card_des">{description}</p>
        {/* Modified: Display Due Date and Priority */}
        <ul className="card_list">
          <li>Due Date: {dueDate}</li> {/* Modified: Display dueDate */}
          <li>Priority: {priority}</li> {/* Modified: Display priority */}
          {/* Modified: Removed hardcoded list items */}
          {/* <li>Empty:</li> */}
          {/* <li>Structure:</li> */}
        </ul>
        <div className="card-footer">
          {/* Modified: Display Due Date (or creation date if you add it) */}
          <small>Due: {dueDate}</small> {/* Modified: Display dueDate */}
          <div className="card-icon">
            {/* These links currently go to /register. You'll need to change these later */}
            {/* For example, view could go to /tasks/:id, edit to /tasks/:id/edit */}
            <div><Link to="#"><FontAwesomeIcon icon={faEye} className="icon" /></Link></div> {/* Modified: Changed Link to # for now */}
            <div><Link to="#"><FontAwesomeIcon icon={faPenToSquare} className="icon" /></Link></div> {/* Modified: Changed Link to # for now */}
            <div><Link to="#"><FontAwesomeIcon icon={faTrash} className="icon" /></Link></div> {/* Modified: Changed Link to # for now */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;