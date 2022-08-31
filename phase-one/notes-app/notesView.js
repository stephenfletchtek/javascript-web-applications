class NotesView {
  constructor(model) {
    this.model = model;
    this.note = document.querySelector('#input-note');
    this.buttonEl = document.querySelector('#add-note');
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.note.value);
      this.note.value = "";
      this.displayNotes();
    });
  }

  displayNotes() {
    const notes = document.querySelectorAll('div.note');
    notes.forEach((note) => {
      note.remove();
    });

    this.model.list.forEach((note) => {
      const divEl = document.createElement('div');
      divEl.textContent = note;
      divEl.className = "note";
      this.mainContainerEl.append(divEl);
    });
  }
}

module.exports = NotesView;
