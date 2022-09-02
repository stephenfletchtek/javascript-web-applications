class NotesView {
  constructor(model, api) {
    this.api = api
    this.model = model;
    this.note = document.querySelector('#input-note');
    this.buttonEl = document.querySelector('#add-note');
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.note.value);
      this.api.createNote(this.note.value)
      this.note.value = "";
      this.displayNotes();
    });
  }

  displayNotes() {
    const notes = document.querySelectorAll('div.note');
    notes.forEach((note) => {
      note.remove();
    });

    this.model.getNotes().forEach((note) => {
      const divEl = document.createElement('div');
      divEl.textContent = note;
      divEl.className = "note";
      this.mainContainerEl.append(divEl);
    });
  }

  setnDisplay = (notes) => {
    this.model.setNotes(notes);
    this.displayNotes();
  }

  displayNotesFromApi() {
    this.api.loadNotes(this.setnDisplay)
    // this.api.loadNotes((notes) => {
    //   this.model.setNotes(notes)
    //   this.displayNotes()
    // })
  }
}

module.exports = NotesView;
