import React from 'react'
import NoteItem from './NoteItem'
import NoteItemAction from './NoteItemAction'


function NoteList ({notes, onDelete,onArchive}) {
    
  return (
    <div className='notes-list' >
        {
            notes.map((note) => (
                <NoteItem 
                key={note.id} 
                id={note.id}
                body={note.body}
                createdAt={note.createdAt}
                archived={note.archived}
                onDelete={onDelete}
                onArchive={onArchive}
                
                {...note}/>
                
            ))
        }
      
    </div>
  )
}

export default NoteList
