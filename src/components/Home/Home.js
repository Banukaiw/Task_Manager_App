import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import CardList from "../Card/CardList";
import Search from "../Search/Search";
import "./home.css";

const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Prepare Monthly Report",
      date: "15/04/2024",
      description:"Check code quality, leave comments, and approve if all looks good."
    },
    {
      id: nanoid(),
      text: "This is the second note",
      date: "16/04/2024",
      description:"Investigate the issue with session timeout and apply a patch."
    },
    {
      id: nanoid(),
      text: "This is the third note",
      date: "21/04/2024",
      description:"Reflect latest changes in endpoints and request formats."
    },
    {
      id: nanoid(),
      text: "This is the third note",
      date: "21/04/2024",
      description:"Share progress, blockers, and today’s focus with the team."
    },
  ]);

  const addNote = (text) => {
    console.log(text);
  };
  return (
    <div className="home">
      <h2>All Tasks</h2>
      <Search />
      <hr></hr>
      <div className="button-container">
        <Link to="/newpost">
          <button className="postbutton">Post Task</button>
        </Link>
      </div>
      <CardList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default Home;
