// function HandleMessage(request) {
//     // background.js alert comes from extension itself
//     // request.key maps directly to k
//     console.log(request.key);
//     // request.page maps directly to window.location.href
//     console.log(request.page);
// }
//

// chrome.runtime.onMessage.addListener(HandleMessage);

// Handle the incoming message via port connection
chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        // Log the received message
        console.log("Message received in background.js", request);

        // Log the key and page URL
        console.log("Key pressed: " + request.key);
        console.log("Page URL: " + request.page);
    });
});
