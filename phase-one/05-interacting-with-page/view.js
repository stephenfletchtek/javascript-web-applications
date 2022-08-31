class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(paragraph) {
    const newpara = document.createElement('p')
    newpara.innerText = paragraph
    this.mainContainerEl.append(newpara)
  }
}

module.exports = View;
