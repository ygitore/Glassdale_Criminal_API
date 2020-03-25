let notes = []

const eventHub = document.querySelector(".container")

/* 
Whenever there is any change in API, such as POST, PUT and DELTE, 
let other component(which are dependepent on API)
know that there is change in API
*/
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

/*
    Allow other modules to get a copy of the application state
*/
export const useNotes = () => notes.slice()

/*
    Get the state of the notes from the API into the application
*/
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}
export const DeleteNote = (noteId) => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method : "DELETE"
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}