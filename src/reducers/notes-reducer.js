
export default (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
        return [
            ...state, 
            { title: action.note.title, noteBody: action.note.noteBody}
        ]
        case 'REMOVE_NOTE':
        return state.filter((note) => action.title !== note.title)
     
        case 'POPULATE_NOTES':
            return action.notes
        default: 
            return state
    }
}

