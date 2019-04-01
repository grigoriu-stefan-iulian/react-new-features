import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

const NoteApp = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
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
        localStorage.setItem('notes', JSON.stringify(notes))
    })
    return (
        <div>
            <h1>Test</h1>
            {notes.map((note, index) => (
                <div>
                    <h4>{index + 1}. {note.title} </h4>
                    <p>{note.noteBody}</p>
                    <button key={index} onClick={() => removeNote(note.title)} >Remove</button>
                </div>
            )
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

const App = (props) => {
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState('Count')

    useEffect(() => {
        document.title = `${text}: ${count}`
    })

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}: {count} </p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
        </div>
    )
}

App.defaultProps = {
    count: 0,
    text: 'Count'
}

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
