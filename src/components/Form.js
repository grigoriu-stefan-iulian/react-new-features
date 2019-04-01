import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

const Form = () => {
    const { dispatch } = useContext(NotesContext)
    const [noteBody, setNoteBody] = useState('')
    const [title, setTitle] = useState('')
    const addNote = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_NOTE', note: { title, noteBody }})
        setTitle('')
        setNoteBody('')
    }

    return (
        <form onSubmit={addNote}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={noteBody} onChange={(e) => setNoteBody(e.target.value)} ></textarea>
            <button>Submit!</button>
        </form>
    )
}

export default Form