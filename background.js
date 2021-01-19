// If you are on youtube.com or youtu.be, replace it wtih index.html instead
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {redirectUrl: chrome.runtime.getURL("quote_Page/index.html")};
    },
  {urls: ["*://*.youtube.com/", "*://*.youtu.be/"]},
  ["blocking"]
);
