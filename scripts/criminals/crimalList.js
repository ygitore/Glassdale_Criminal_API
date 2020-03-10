import {criminal} from './criminal.js'
import {useCriminals} from './CriminalProvider.js'

const contentTarget = document.querySelector('.filters__incarceration')
export const crimianlList = () => {
    const criminals = useCriminals()
    for (const criminalObject of criminals) {
       contentTarget.innerHTML += criminal(criminalObject)
    }
}