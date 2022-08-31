class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(paragraph) {
    const newpara = document.createElement('p');
    newpara.innerText = paragraph;
    this.mainContainerEl.append(newpara);
  }

  clearParagraphs() {
    // another way of getting chilren of this.mainContainerEl
    // const paragraphs = Array.from(this.mainContainerEl.children)

    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach((element) => {
      element.remove();
    });
  }
}
module.exports = View;
