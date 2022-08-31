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

  it('It adds milk and go to the gym', () => {
    const model = new NotesModel;
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('It resets after adding milk and go to the gym', () => {
    const model = new NotesModel;
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })

})