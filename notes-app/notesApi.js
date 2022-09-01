class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(callback)
  }

  createNote(note, callback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: note })
    })
      .then(response => response.json())
      .then(data => {
        if (typeof callback === "function") callback(data)
      })
  }
}
module.exports = NotesApi;
