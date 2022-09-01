const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads data', () => {
    expect.assertions(1);
    const notesApi = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(['First note', 'Second note']))
    notesApi.loadNotes((returnedNotesFromApi) => {
      expect(returnedNotesFromApi).toEqual(['First note', 'Second note']);
    });
  })
})