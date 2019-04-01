import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

const NoteApp = () => {
    const [notes, setNotes] = useState([])
    const [noteBody, setNoteBody] = useState('')
    const [title, setTitle] = useState('')
    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title, noteBody }
        ])
        setTitle('')
        setNoteBody('')
    }
    const removeNote = (title) => setNotes(notes.filter((note) => note.title !== title))

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')) || [])
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
    return (
        <div>
            <h1>Test</h1>
            {
                notes.map((note, index) => <Note key={index + 100} note={note} index={index} removeNote = {removeNote} />
                )}
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={noteBody} onChange={(e) => setNoteBody(e.target.value)} ></textarea>
                <button>Submit!</button>
            </form>
        </div>
    )
}

const Note = ({ index, note, removeNote }) => {
    useEffect(() => {
        console.log('setting useEffect')
        return () => {
            console.log('Cleaning up effect')
        }
    }, [])
    return (
        <div>
            <h4>{index + 1}. {note.title} </h4>
            <p>{note.noteBody}</p>
            <button key={index} onClick={() => removeNote(note.title)} >Remove</button>
        </div>
    )
}


ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
