const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const model = new NotesModel
const notesView = new NotesView(model)

console.log('The notes app is running')
console.log(model.getNotes())