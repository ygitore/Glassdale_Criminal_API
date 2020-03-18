/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

import { useConvictions } from "./ConvictionProvider.js"
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

const eventHub = document.querySelector('.container')

contentTarget.addEventListener('change', changeEvent => {
    const targetId = changeEvent.target.id
    if(targetId === "crimeSelect"){
        const theCrimeThatWasChosen = changeEvent.target.value
        const crimeChosen = new CustomEvent("crimeChosen", {
            detail: {
                chosenCrime: theCrimeThatWasChosen
            }
        })    
        eventHub.dispatchEvent(crimeChosen)
    }
    })

const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(singleConviction => {
                        return `
                            <option value = ${singleConviction.name}>${singleConviction.name} </option>
                        `
                    })
                }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect