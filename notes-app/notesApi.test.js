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
    expect.assertions(2)
    let mocks = [fetch.mockResponseOnce(JSON.stringify('any old rubbish to stringify'))]
    mocks.push(fetch.mockReject(new TypeError))

    mocks.forEach(() => {
      notesApi.loadNotes(
        (validData) => {
          expect(validData).toEqual('any old rubbish to stringify');
        }, (invalidData) => {
          expect(invalidData.name).toBe('TypeError')
        })
    })
  });
})
