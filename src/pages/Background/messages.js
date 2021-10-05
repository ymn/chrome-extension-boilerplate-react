// messages.js, used in both the background and content script
import { getMessage } from '@extend-chrome/messages'

// getMessage returns [Function, Observable, Function]
export const [sendNumber, numberStream, waitForNumber] = getMessage(
    // String to be used as a greeting
    'NUMBER',
)