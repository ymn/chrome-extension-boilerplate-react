// background.js, a background script
import { Router } from 'chomex';

console.log('This is the background page.');
console.log('Put the background scripts here.');

const router = new Router();
router.on("/users/get", (message) => {
    console.log('', message)
    return "mike";
});

chrome.runtime.onMessage.addListener(router.listener());