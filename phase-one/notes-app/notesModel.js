class NotesModel {
  constructor() {
    this.list = []
  }

  getNotes() {
    return this.list
  }

  addNote(note) {
    this.list.push(note)
  }
}

module.exports = NotesModel;
