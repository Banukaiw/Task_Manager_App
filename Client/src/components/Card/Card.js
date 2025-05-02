
import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";


const Card = ({ task }) => {
  const { title, description, dueDate, priority } = task; 


  return (
    <div className="card">
      <div className="card-content">
        <span className="card_title">{title}</span>
        <p className="card_des">{description}</p>       
        <ul className="card_list">
          <li>Due Date: {dueDate}</li> 
          <li>Priority: {priority}</li>                    
        </ul>
        
        <div className="card-footer">          
          <small>Due: {dueDate}</small> 
          <div className="card-icon">
            {/* These links currently go to /register. You'll need to change these later */}
            {/* For example, view could go to /tasks/:id, edit to /tasks/:id/edit */}
            <div><Link to="#"><FontAwesomeIcon icon={faEye} className="icon" /></Link></div> 
            <div><Link to="#"><FontAwesomeIcon icon={faPenToSquare} className="icon" /></Link></div>
            <div><Link to="#"><FontAwesomeIcon icon={faTrash} className="icon" /></Link></div> 
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Card;