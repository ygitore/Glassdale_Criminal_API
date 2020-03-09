import { convictionList } from "./convictions/convictionList.js";
// main.js
import { getOfficers } from "./officers/OfficerProvider.js";

getOfficers().then(
    /*
        Now that you have the data, what
        component should be rendered?
    */
    convictionList

)