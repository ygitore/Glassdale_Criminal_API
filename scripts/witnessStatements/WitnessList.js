import {Witness} from './Witness.js'
import { getWitnesses, useWitnesses } from './WitnessProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witness__container")

eventHub.addEventListener("witnessButtonClicked", e => {
    render()    
})

const render = () => {
    getWitnesses().then(
        () => {
            const allWitnesses = useWitnesses()
            contentTarget.innerHTML = allWitnesses.map(singleWitness => {
                return Witness(singleWitness)
        }).join("")
    })
}