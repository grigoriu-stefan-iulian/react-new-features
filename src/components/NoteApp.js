import React, {useEffect, useReducer} from 'react'
import notesReducer from '../reducers/notes-reducer'
import NotesList from './NotesList'
import Form from './Form'
import NotesContext from '../context/notes-context'

const NoteApp = () => {
    //const [notes, setNotes] = useState([])
    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        dispatch({type: 'POPULATE_NOTES', notes: JSON.parse(localStorage.getItem('notes'))})
       // setNotes(JSON.parse(localStorage.getItem('notes')) || [])
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
    return (
        <NotesContext.Provider value={{notes, dispatch}}>
            <h1>Notes</h1>
            <NotesList /> 
            <p>Add note</p>
            <Form />
        </NotesContext.Provider>
    )
}

export default NoteApp