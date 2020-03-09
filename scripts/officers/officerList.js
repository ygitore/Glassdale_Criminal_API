import { Conviction } from "./officer.js";
import { useOfficers } from "./OfficerProvider.js";

const contentTarget = document.querySelector('.filters__officer')
export const convictionList = () => {
    const officers = useOfficers()
    for (const convictionObject of officers) {
        contentTarget.innerHTML += Conviction(convictionObject)
    }
}