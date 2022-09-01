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
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

  it('enter a note and click', () => {
    const model = new Model;
    const notesView = new NotesView(model);
    const inputEl = document.querySelector('#input-note');
    const buttonEl = document.querySelector('#add-note');

    inputEl.value = 'Will this work?';
    const check = inputEl.value
    buttonEl.click();
    expect(document.querySelector('div.note').textContent).toBe(check);
  });

  it('only displays notes once', () => {
    const model = new Model;
    const notesView = new NotesView(model);

    model.addNote('Buy milk');
    notesView.displayNotes();
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(1);
  });

  it('clears the input box when Add Note is clicked', () => {
    const model = new Model;
    const notesView = new NotesView(model);
    const inputEl = document.querySelector('#input-note');
    const buttonEl = document.querySelector('#add-note');

    inputEl.value = 'Will this work?';
    buttonEl.click();
    expect(inputEl.value).toBe("")
  })

  it('displays notes from api', () => {
    const model = new Model;
    const mockApi = { loadNotes: (callback) => callback(['note one', 'note two']) }
    const notesView = new NotesView(model, mockApi);
    notesView.displayNotesFromApi();
    const results = document.querySelectorAll('div.note');
    expect(results.length).toBe(2);
    expect(results[0].textContent).toBe('note one')
    expect(results[1].textContent).toBe('note two')
  })
})

