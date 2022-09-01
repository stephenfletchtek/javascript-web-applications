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

  it('creates a note', () => {
    const notesApi = new NotesApi();
    expect.assertions(1);
    fetch.mockResponseOnce(JSON.stringify(['Note1']))
    notesApi.createNote("Note1")
    fetch.mockResponseOnce(JSON.stringify(['Note1', 'Note2']))
    notesApi.createNote("Note2", (response) => expect(response).toEqual(['Note1', 'Note2']))
  });

})
