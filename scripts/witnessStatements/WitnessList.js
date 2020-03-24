import {Witness} from './Witness.js'
import { getWitnesses, useWitnesses } from './WitnessProvider.js'

let visiblity = false

const contentTarget = document.querySelector(".witness__container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessButtonClicked", e => {
    visiblity = !visiblity
    if(visiblity){
        contentTarget.classList.remove("invisible")
        render()
    } else {
        contentTarget.classList.add("invisible")
    }
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