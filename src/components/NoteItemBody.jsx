import React from 'react'
import { showFormattedDate } from '../utils/index.js'


function NoteItemBody  ({title,createdAt, body})  {

    console.log("Original Date:", createdAt); // Melihat nilai createdAt
    console.log("Formatted Date:", showFormattedDate(createdAt)); // Melihat hasil format tanggal

  return (
    <div className='note-item__content'>
      <h3 className='note-item__title'>{title}</h3>
      <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-item__body'>{body}</p>
    </div>
  )
}

export default NoteItemBody
