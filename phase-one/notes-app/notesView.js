class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container')
  }

  displayNotes() {
    this.model.list.forEach((note) => {
      let divEl = document.createElement('div');
      // let paragraphEl = document.createElement('p');    
      divEl.textContent = note;
      divEl.className = "note";
      // paragraphEl.innerText = note;              
      // divEl.append(paragraphEl);                  
      this.mainContainerEl.append(divEl);
    })
  }
}

module.exports = NotesView;
