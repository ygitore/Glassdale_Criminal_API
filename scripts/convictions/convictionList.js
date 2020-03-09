import { Conviction } from "./conviction.js";
import { useOfficers } from "../officers/OfficerProvider.js";

const contentTarget = document.querySelector('.filters__crime')
export const convictionList = () => {
    const officers = useOfficers()
    for (const convictionObject of officers) {
        contentTarget.innerHTML += Conviction(convictionObject)
    }
}