// background.js, a background script
import { numberStream } from './messages'

console.log('This is the background page.');
console.log('Put the background scripts here.');

// numberStream is an RxJs Observable
numberStream.subscribe(([n, sender]) => {
    console.log('the data passed to sendNumber', n)
    // Sender is a Chrome runtime MessageSender
    console.log('the message sender', sender)
})