const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./notesApi')

const model = new NotesModel
const notesApi = new NotesApi
const notesView = new NotesView(model, notesApi)

console.log('The notes app is running')
console.log(model.getNotes())

notesView.displayNotesFromApi();
