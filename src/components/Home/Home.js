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
      <h2>All Tasks</h2>
      <Search />
      <hr></hr>
      <div className="button-container">
        {/* This Link is correct for navigating to the Post Task page */}
        <Link to="/newpost">
          <button className="postbutton">Post Task</button>
        </Link>
      </div>
      {/* Modified: Pass the tasks prop down to CardList */}
      {/* Modified: Remove handleAddNote prop from CardList */}
      <CardList tasks={tasks} />
    </div>
  );
};

export default Home;