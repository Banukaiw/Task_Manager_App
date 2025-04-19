import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import "./navbar.css"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
        <nav>
            <Link to="/" className='title'>Todo list</Link>
            <div className='menu' onClick={()=>{
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open":""}>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                
            </ul>
        </nav>
    </div>
    
  )
}

export default Navbar