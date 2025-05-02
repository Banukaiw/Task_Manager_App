// CardList.js
import React from 'react'
import Card from '../Card/Card.js'
import "./cardlist.css"
import Addcard from './Addcard.js'

// Modified: Receive tasks as a prop, remove handleAddNote
const CardList = ({ tasks }) => {
  return (
    <div className='card-list'>
      {/* Modified: Map over tasks instead of notes */}
      {/* Modified: Pass the whole task object as a prop to Card */}
      {/* Modified: Use task.id as the key */}
      {tasks.map((task) =>
        <Card key={task.id} task={task} />
      )}
      
      {/* Modified: Removed the AddCard/handleAddNote part - it's handled by the Post Task page */}
      <Addcard /> 
    </div>
  )
}

export default CardList