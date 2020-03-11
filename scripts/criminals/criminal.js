export const criminal = (criminalObject) => {
    return `
    <div class = "criminal-info">
        <div>Crime commited by : ${criminalObject.name}</div>
        <div>Age : ${criminalObject.age}</div>
        <div>Phone Number : ${criminalObject.phone}</div>
        <div>Address : ${criminalObject.address}</div>
        <div>Conviction : ${criminalObject.conviction}</div>    
    </div>
    `
}