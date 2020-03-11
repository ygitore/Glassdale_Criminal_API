import {criminal} from './criminal.js'
import {useCriminals} from './CriminalProvider.js'

const contentTarget = document.querySelector('.filters__incarceration')

export const crimianlList = () => {
    const criminals = useCriminals()
    for (const criminalObject of criminals) {
       contentTarget.innerHTML += criminal(criminalObject)
    }    
}

const eventHub = document.querySelector(".container")
const officersTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("crimeChosen", event => {
    // Filter the list of criminal who committed the crime

    // Get the criminals
    const criminals = useCriminals()

    // Get the crime
    const theCrimeThatWasChosen = event.detail.chosenCrime

    // Look at all of the criminals and determine if each one is a vandal
    const guiltyCriminals = criminals.filter(criminal => {
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false
    })

    // Clear inner HTML of the criminal list
    contentTarget.innerHTML = ""

    // Build it up again
    for (const singleCriminal of guiltyCriminals) {
        contentTarget.innerHTML += criminal(singleCriminal)
    }
    officersTarget.innerHTML = ""
})