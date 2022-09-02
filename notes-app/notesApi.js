class NotesApi {
  loadNotes(callback, catchCallback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(callback)
      .catch(catchCallback)
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

  deleteAll(callback = () => { }) {
    fetch('http://localhost:3000/notes', {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then((data) => callback(data));
  }
}
module.exports = NotesApi;
