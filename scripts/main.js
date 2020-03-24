import { getCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NotesList } from "./notes/NotesList.js"
import "./criminals/KnownAssociatesDialog.js"
import {WitnessButton} from './witnessStatements/WitnessButton.js'
import './witnessStatements/WitnessList.js'
getCriminals().then(CriminalList).then(NoteForm).then(NotesList)
getConvictions().then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()
WitnessButton()
