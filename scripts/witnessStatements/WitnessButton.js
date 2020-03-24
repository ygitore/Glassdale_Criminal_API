const contentTarget = document.querySelector(".show__witness")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", e => {
    if(e.target.id === "witness__button"){
        const witnessButtonClicked = new CustomEvent("witnessButtonClicked")
        eventHub.dispatchEvent(witnessButtonClicked)
    }
})
export const WitnessButton = () => {
    contentTarget.innerHTML = "<button id ='witness__button'>Witness</button>"
}