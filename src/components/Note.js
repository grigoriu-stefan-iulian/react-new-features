import React, { useContext, useState, useEffect } from 'react'
import NotesContext from '../context/notes-context'

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return position
}

const Note = ({ index, note }) => {
    const { dispatch } = useContext(NotesContext)
    const removeNote = (title) => dispatch({ type: 'REMOVE_NOTE', title })
    const position = useMousePosition()
    // setNotes(notes.filter((note) => note.title !== title))

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