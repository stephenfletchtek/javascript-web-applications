const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads data', () => {
    const notesApi = new NotesApi();
    let result;
    fetch.mockResponseOnce(JSON.stringify(['First note', 'Second note']))
    notesApi.loadNotes((returnedNotesFromApi) => result = returnedNotesFromApi);
    expect(result).toEqual(['First note', 'Second note']);
  })
})