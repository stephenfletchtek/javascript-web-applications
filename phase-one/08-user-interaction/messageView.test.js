/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const messageEl = document.querySelector('#message-input');
    const buttonEl = document.querySelector('#show-message-button');
    messageEl.value = 'My test message'
    buttonEl.click();
    expect(document.querySelector('div#message').textContent).toBe(messageEl.value);
  });

  it('click the show button followed by the hide button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const showButtonEl = document.querySelector('#show-message-button');
    const hideButtonEl = document.querySelector('#hide-message-button');
    showButtonEl.click();
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});