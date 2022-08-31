const NotesModel = require('./notesModel')

describe('NotesModel class', () => {
  it('Returns empty list', () => {
    const model = new NotesModel
    expect(model.getNotes()).toEqual([])
  })
})