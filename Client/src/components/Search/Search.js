import React from 'react'
import './search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { faEnvelope } from '@fortawesome/free-solid-svg-icons' */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className='search'>
        <input type='text' className='inputtext' placeholder='Type hear to Search..'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicon'/>
    </div>
  )
}

export default Search