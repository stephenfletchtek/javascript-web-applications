const NotesView = require('./notesView');
const Model = require('./notesModel');
const model = new Model;
const notesView = new NotesView(model);

describe('NotesView class', () => {
  it('displays notes', () => {
    // stuff here
  })
})