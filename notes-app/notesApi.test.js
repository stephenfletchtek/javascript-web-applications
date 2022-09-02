const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()
let notesApi;

describe('NotesApi class', () => {
  beforeEach(() => {
    notesApi = new NotesApi();
  })

  it('calls fetch and loads data', () => {
    expect.assertions(2);
    fetch.mockResponseOnce(JSON.stringify([{ content: 'First note' }, { content: 'Second note' }]))
    notesApi.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi[0].content).toBe('First note');
      expect(returnedDataFromApi[1].content).toBe('Second note');
    });
  })

  it('creates a note', () => {
    // const notesApi = new NotesApi();
    expect.assertions(2);
    fetch.mockResponseOnce(JSON.stringify('any old rubbish to stringify'));
    notesApi.createNote('Note1');
    fetch.mockResponseOnce(JSON.stringify([{ content: 'Note1' }, { content: 'Note2' }]))
    notesApi.createNote("Note2", (response) => {
      expect(response[0].content).toEqual('Note1');
      expect(response[1].content).toEqual('Note2');
    })
  });

  it('catches a failed loadNotes', () => {
    expect.assertions(1);
    // fetch.mockResponseOnce(JSON.stringify([{ content: 'First note' }, { content: 'Second note' }]))

    // fetch.mockResponseOnce(JSON.stringify("this is a test")) // THIS RETURNS THEN
    // fetch.mockResponseOnce({ ok: false }) // THIS RETURNS CATCH
    fetch.mockReject(new TypeError)
    // try {
    //   expect(1 + 2).toBe(4)
    // }
    // catch {
    //   expect(2 + 3).toBe(5)
    // }
    notesApi.loadNotes((data) => expect(false).toBe(true), (otherData) => expect(1 + 2).toBeTruthy())
  });
})

