let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
   return fetch("https://criminals.glassdale.us/crimes")
   .then(response => response.json())
   .then(parsedConvictions => {
       convictions = parsedConvictions
   })
}

