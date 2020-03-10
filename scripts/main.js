import { convictionList } from "./officers/officerList.js";
import { getOfficers } from "./officers/OfficerProvider.js";

import {getCriminals } from "./criminals/CriminalProvider.js";
import { crimianlList } from "./criminals/crimalList.js";

import { getConvictions } from "./conviction/ConvictionProvider.js";
import ConvictionSelect from "./conviction/ConvictionSelect.js";


getOfficers().then(
   convictionList
)
getCriminals().then(
    crimianlList
)

getConvictions().then(
    ConvictionSelect
)