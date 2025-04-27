// Home.js
import React from "react";
// import { useState } from "react"; // Modified: Remove useState
// import { nanoid } from "nanoid"; // Modified: Remove nanoid
import { Link } from "react-router-dom";
import CardList from "../Card/CardList";
import Search from "../Search/Search";
import "./home.css";

// Modified: Receive tasks as a prop
const Home = ({ tasks }) => {
  // Modified: Remove notes state
  // const [notes, setNotes] = useState([]);

  // Modified: Remove addNote function
  /* const addNote = (text) => {
    console.log(text);
  }; */

  return (
    <div className="home">
      <div className="menu_side"></div>
      <div className="content_side">
        <Search />
        <hr></hr>
        <div className="button-container">
          <Link to="/newpost">
            <button className="postbutton">Post Task</button>
          </Link>
        </div>
        <CardList tasks={tasks} />
      </div>
      <div className="status_side"></div>
    </div>
  );
};

export default Home;
