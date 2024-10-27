import React from 'react';
import NoteList from './NoteList.jsx';
import { getInitialData } from '../utils/index.js';
import NoteInput from './NoteInput.jsx';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: '',
      archivedNotes: [],
    }
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onSearchHandler = this.onSearchHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
  }


  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({ notes })
  }

  onSearchHandler(event) {
    this.setState({ searchQuery: event.target.value })
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        return { ...note, archived: !note.archived } // Toggle archive
      }
      return note;
    });
    this.setState({ notes })
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),

          }
        ]
      }
    })
  }

  render() {

    const { notes, searchQuery } = this.state;

    const filteredNotes = notes.filter((note) => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      return (
        note.title.toLowerCase().includes(lowerCaseQuery) ||
        note.body.toLowerCase().includes(lowerCaseQuery) ||
        note.createdAt.toLowerCase().includes(lowerCaseQuery)
      );
    });

    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = notes.filter(note => note.archived);


    return (
      <div className="note-app">
        <div className='note-app__header'>
          <h1>Notes</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder='Cari catatan...'
              value={searchQuery}
              onChange={this.onSearchHandler}
            />
          </div>
        </div>

        <div className='note-app__body'>
          <NoteInput addNote={this.onAddNoteHandler} />


          <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? (
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler} />
        ) : (
          <p>Tidak ada catatan aktif</p>
        )}

        <h2>Arsip Catatan</h2>
        {archivedNotes.length > 0 ? (
          <NoteList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler} />
        ) : (
          <p>Tidak ada catatan arsip</p>
        )}
        </div>
      </div>

    );
  }

}

export default NoteApp;
