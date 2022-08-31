class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');

    this.showButtonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    let divEl = document.createElement('div');
    divEl.textContent = 'This message displayed by JavaScript';
    divEl.id = 'message';
    this.mainContainerEl.append(divEl);
    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    const messages = document.querySelectorAll('#message')
    messages.forEach((element) => {
      element.remove()
    })

    // const message = document.querySelector('#message')
    // message.remove()
  }
}

module.exports = MessageView;