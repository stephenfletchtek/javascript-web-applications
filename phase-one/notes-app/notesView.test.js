/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const Model = require('./notesModel');



describe('NotesView class', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html')
  });

  it('displays notes', () => {
    const model = new Model;
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    const notesView = new NotesView(model);
    notesView.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(2);

  })
})

