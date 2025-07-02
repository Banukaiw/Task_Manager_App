// Home.js
/* fire alan walker */
/* kuludul araliya */
/* hanthane - costa */
/* sandakinnarawi mage */
/* ahankata nagere 2 */
/* hanthane mal */
/* sun - watsebha */
/* living life - KNOX */
// Home.js
/* fire alan walker */
/* kuludul araliya */
/* hanthane - costa */
/* sandakinnarawi mage */
/* ahankata nagere 2 */
/* hanthane mal */
/* sun - watsebha */
/* living life - KNOX */

import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import CardList from "../Card/CardList";
import Search from "../Search/Search";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarDays,
  faSun,
  faMoon,faRightFromBracket,
  faVihara,faClipboardCheck,faStopwatch,faClockRotateLeft,faBarsStaggered
} from "@fortawesome/free-solid-svg-icons";

const Home = ({ tasks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="home">
      <div className="nav_side">
        <div className="logo">
          <FontAwesomeIcon className="logo_icon" icon={faVihara} />
          <Link to="/home" className="title">
            Todo list
            <p>Welcome back to home !!</p>
          </Link>
        </div>

        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <div></div>
        </div>
        <div className="homenav_right">
          <Link to="/newpost">
            <button className="postbutton">Post Task</button>
          </Link>

          <div>
            {theme === "dark" ? (
              <button className="theme1" onClick={toggleTheme}>
                <FontAwesomeIcon icon={faSun} className="theme_icon1" />
              </button>
            ) : (
              <button className="theme2" onClick={toggleTheme}>
                <FontAwesomeIcon icon={faMoon} className="theme_icon2" />
              </button>
            )}
          </div>
          <div className="apps">
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
          <div className="profile">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      <div className="menu_side">
        <div className="menu_list">
          <ul>
            <li><FontAwesomeIcon icon={faBarsStaggered} /></li>
            <li><FontAwesomeIcon icon={faClipboardCheck} /></li>
            <li><FontAwesomeIcon icon={faClockRotateLeft} /></li>
            <li><FontAwesomeIcon icon={faStopwatch} /></li>
          </ul>
        </div>
      </div>

      <div className="content_side">
        <div className="filter_content">
          <Search />
          <div className="filter_button">
            <ul>
              <li>
                <button>All</button>
              </li>
              <li>
                <button>High</button>
              </li>
              <li>
                <button>Medium</button>
              </li>
              <li>
                <button>Low</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="Card_List">
          <CardList tasks={tasks} />
        </div>
      </div>
      <div className="status_side">
        <div className="profile_status"></div>
        <div className="current_status2">
          <div className="sec1"></div>
          <div className="sec1"></div>
          <div className="sec1"></div>
          <div className="sec1"></div>
        </div>
        <div className="current_status1">
          <p>CURRENT STATUS</p>
        </div>
        <div className="status_button">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p>LOG OUT </p>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
