
import React from 'react'

import Card from '../Card/Card.js'
import "./cardlist.css"

const CardList = ({notes}, handleAddNote) => {
  return (
    <div className='card-list'>
      {notes.map((note)=>
      <Card id={note.id} text={note.text} date={note.date} description={note.description}/>)}
        
    </div>
  )
}

export default CardList
