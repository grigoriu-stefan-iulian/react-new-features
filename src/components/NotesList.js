import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

const NotesList = () => {
    const { notes } = useContext(NotesContext)
    return (
        <div>
            {notes.map((note, index) => <Note key={index + 100} note={note} index={index} />)}
        </div>
    )
}

export default NotesList