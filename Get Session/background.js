// Function to extract and store session IDs
function storeSessionID() {
  chrome.cookies.getAll({}, (cookies) => {
    cookies.forEach(cookie => {
      if (cookie.name.toLowerCase().includes('session')) {
        // Store session ID in chrome.storage
        chrome.storage.local.set({ [cookie.name]: cookie.value }, () => {
          console.log(`Stored session ID for ${cookie.name}: ${cookie.value}`);
        });
      }
    });
  });
}

// Listen for completed web navigation to capture session IDs
chrome.webNavigation.onCompleted.addListener(() => {
  storeSessionID();
}, { url: [{ urlMatches: 'https://*/*' }] });

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSessionID") {
    // Retrieve all session IDs from chrome.storage.local
    chrome.storage.local.get(null, (items) => {
      sendResponse({ sessionIDs: items });
    });
    // Return true to indicate an async response
    return true;
  }
});