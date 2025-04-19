
import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { faEnvelope } from '@fortawesome/free-solid-svg-icons' */
import { faPenToSquare, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

const Card = ({id, text, date,description}) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card_title">{text}</span>
        <p className="card_des">{description}</p>
        <ul className="card_list">
          <li>Due Date:</li>
          <li>Priority:</li>
          <li>Empty:</li>
          <li>Structure:</li>
        </ul>
        <div className="card-footer">
          <small>{date}</small>
          <div className="card-icon">
          <div><Link to="/register"><FontAwesomeIcon icon={faEye} className="icon"/></Link></div>
            <div><Link to="/register"><FontAwesomeIcon icon={faPenToSquare} className="icon"/></Link></div>
            <div><Link to="/register"><FontAwesomeIcon icon={faTrash} className="icon"/></Link></div>
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;