import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'



const Note = ({ index, note }) => {
    const { dispatch } = useContext(NotesContext)
    const removeNote = (title) => dispatch({ type: 'REMOVE_NOTE', title })
    // setNotes(notes.filter((note) => note.title !== title))
    const position = useMousePosition()
    return (
        <div>
            <p>x: {position.x}, y: {position.y} </p>
            <h4>{index + 1}. {note.title} </h4>
            <p>{note.noteBody}</p>
            <button key={index} onClick={() => removeNote(note.title)} >Remove</button>
        </div>
    )
}

export default Note