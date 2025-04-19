import React from 'react'
import './search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { faEnvelope } from '@fortawesome/free-solid-svg-icons' */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className='search'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicon'/>
        <input type='text' placeholder='Type hear to Search..'></input>
    </div>
  )
}

export default Search