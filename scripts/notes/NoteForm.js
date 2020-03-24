import { saveNote } from "./NotesProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let visibility = false

// To toggle when show note Form button is clicked
eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const criminalId = document.querySelector("#criminalDropdown").value

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminal: parseInt(criminalId),
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    const criminals = useCriminals()
    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <fieldset>
            <label class="label label--notes" for="noteText">Note:</label>
            <textarea id="noteText"></textarea>
        </fieldset>
        <fieldset>
            <label class="label label--notes" for="criminal">Criminal:</label>
            <select id = "criminalDropdown">
                <option>Please select criminal...</option>
                ${criminals.map(criminal => {
                    return `<option value = "${criminal.id}">${criminal.name}</option>`
                }).join("")}
            </select>
        </fieldset>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}