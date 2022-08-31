class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.mainContainerEl = document.querySelector('#main-container')

    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });
  }

  displayMessage() {
    let divEl = document.createElement('div');
    divEl.textContent = 'This message displayed by JavaScript';
    divEl.id = 'message';
    this.mainContainerEl.append(divEl);
    console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;