export const Witness = witnessObject => {
    return `<section>
        <header>${witnessObject.name}</header>
        <p>${witnessObject.statements}</p>
    </section>`
}