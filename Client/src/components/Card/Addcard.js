import React from 'react'
import { useNavigate } from "react-router-dom";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons"; 
import './addcard.css'

const Addcard = () => {

    const navigate = useNavigate();

const handleAddNote=()=>{
    navigate('/newpost')
}

  return (
    <div>
        <div className="post_card" onClick={handleAddNote}>
            <div className='postcard_icon'>
                <FontAwesomeIcon icon={faPlus} /> 
            </div>

            
            
          </div>
    </div>
    
  )
}

export default Addcard