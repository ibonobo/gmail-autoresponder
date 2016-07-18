# A Gmail app-scripts autoresponder

Canned Replies has some obvious limitations: Replies to the canned address are lost, the automated search/labels functions are limited, you cannot manually reply with canned replies in the mobile app, etc.

I've been meaning to implement Amit Agarwal (labnol) script in Google Apps for automatically responding to emails based on labels. This script was initially offered free of charge, and I downloaded it but have not really used it yet. Now the script costs money if you want more than one rule, and I wouldn't mind paying, except that it does not come with the code, so you learn nothing by paying.

As I recall, the script checked every hour for its rules (usually a label, but it could be other things), then did its thing, then set a "replied" label on the processed message. When searching for messages, those having that label were excluded. This shouldn't be so hard to implement.

An older, free version of Amit's script can still be found in someone's Google Drive document if searching carefully, but again, I do not want to go that route.

I'll collect here other scripts, starting with one by Erron Jason which I will soon test.

ErronJason:
Read autoresponder.js for an idea of how to use it.

_For now, be wary of running this without setting a time constraint, or it will respond to __all__ your emails_.

Setting it up is as easy as going to Google Drive, New > More > Google Apps Script, and pasting in autoresponder.js. Set this to run as often as you need.

Bouraoui at StackOverflow
http://stackoverflow.com/questions/35460176/how-can-i-set-a-label-to-a-new-message-when-sending-it-with-gmail-api

Four Kitchens - using Google Script to label email
http://fourkitchens.com/blog/article/rescuing-myself-email-monster-javascript

Dalmaijer simple implementation
http://www.pygaze.org/2015/06/selective-gmail-autoreply/

IFTTT label with highfive for autoreply
https://ifttt.com/recipes/82639

ESS on stackoverflow
http://webapps.stackexchange.com/questions/26120/gmail-autoreply-when-adding-a-label-to-a-message

Codegists
http://codegists.com/snippet/javascript/autoresponderjs_erronjason_javascript
