import React from 'react'
import NoteItemAction from './NoteItemAction'
import NoteItemBody from './NoteItemBody'


function NoteItem ({title,createdAt, body,id, onDelete,onArchive, archived})  {

  
  return (
    <div className='note-item'>
        <NoteItemBody title={title} createdAt={createdAt} body={body}/>
        <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived}/>

      
    </div>
  )
}

export default NoteItem
