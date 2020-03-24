let witnesses = []

export const useWitnesses = witnesses.slice()

export const getWitnesses = () => {
    return fetch('http://criminals.glassdale.us/witnesses')
    .then(response => response.json())
    .then(parsedData => {
        witnesses = parsedData
    })
}
