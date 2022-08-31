const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const model = new NotesModel
const notesView = new NotesView(model)

model.addNote('Buy milk');
model.addNote('Go to the gym');
notesView.displayNotes();

console.log('The notes app is running')
console.log(model.getNotes())