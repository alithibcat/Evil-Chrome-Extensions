// Request session IDs from the background script
chrome.runtime.sendMessage({ action: "getSessionID" }, (response) => {
    if (response && response.sessionIDs) {
      // Send the session IDs to the server
      //const sessionIDs = response.sessionIDs;
      //const url = window.location.href;
      const keyData = {
        sessionData: response.sessionIDs,
        url: window.location.href
      }
    fetch('http://localhost:3000/getsession', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(keyData)
    });
    }
  });

  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendSessionID" && request.data) {
      const sessionData = request.data;
      //console.log("Received session data:", sessionData);
      
      // Process session data as needed, e.g., log to the console or manipulate the DOM
    }
  });