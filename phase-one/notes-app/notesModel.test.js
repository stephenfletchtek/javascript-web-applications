const NotesModel = require('./notesModel')

describe('NotesModel class', () => {
  it('Returns empty list', () => {
    const model = new NotesModel;
    expect(model.getNotes()).toEqual([]);
  })

  it('It adds milk', () => {
    const model = new NotesModel;
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  })

})