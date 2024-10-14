chrome.runtime.onConnect.addListener(function(port){});

window.onkeydown = function(event) {
    alert(event.key);
    //chrome.runtime.sendMessage({/*JSON*/});
}