import { convictionList } from "./officers/officerList.js";
import { getOfficers } from "./officers/OfficerProvider.js";
import {getCriminals } from "./criminals/CriminalProvider.js";
import { crimianlList } from "./criminals/crimalList.js";


getOfficers().then(
   convictionList
)
getCriminals().then(
    crimianlList
)