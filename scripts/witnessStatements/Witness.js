export const Witness = witnessObject => {
    return `<section class="individual-witness">
        <header class="witness-name">${witnessObject.name}</header>
        <p>${witnessObject.statements}</p>
    </section>`
}