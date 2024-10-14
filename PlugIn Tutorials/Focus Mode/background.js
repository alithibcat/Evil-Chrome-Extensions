chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';
const AO3 = 'https://archiveofourown.org/works/';  // Corrected URL

chrome.action.onClicked.addListener(async (tab) => {
  const isExtensionSite = tab.url.startsWith(extensions) || tab.url.startsWith(webstore);
  const isAO3Site = tab.url.startsWith(AO3);

  if (isExtensionSite || isAO3Site) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    const cssFile = isAO3Site ? 'focus-mode-AO3.css' : 'focus-mode.css';

    if (nextState === "ON") {
      await chrome.scripting.insertCSS({
        files: [cssFile],
        target: { tabId: tab.id },
      });
    } else if (nextState === "OFF") {
      await chrome.scripting.removeCSS({
        files: [cssFile],
        target: { tabId: tab.id },
      });
    }
  }
});
