import { getNotes, useNotes, DeleteNote } from "./NotesProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let visibility = false

contentTarget.addEventListener("click", e => {
    if(e.target.id.startsWith("delete--")){
        const [_, criminalId] = e.target.id.split("--")
        DeleteNote(criminalId)
    }
})
/*
    Event handlers
*/
eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
        render()
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    // if (visibility) {
    //     contentTarget.classList.remove("invisible")
    // }
    // else {
    //     contentTarget.classList.add("invisible")
    // }

    getNotes().then(() => {
        const allTheNotes = useNotes()
        const criminals = useCriminals()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                const criminal = criminals.find(currentCriminal => currentCriminal.id === currentNoteObject.criminalId)
                return Note(currentNoteObject, criminal)
            }
        ).join("")
    })
}

export const NotesList = () => {
    render()
}