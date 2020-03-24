let witnesses = []

export const useWitnesses = () => witnesses.slice()

export const getWitnesses = () => {
    return fetch('https://criminals.glassdale.us/witnesses')
    .then(response => response.json())
    .then(parsedData => {
        witnesses = parsedData
    })
}
