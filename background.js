// background.js
chrome.contextMenus.create({
    title: "Open code with nearpod",
    contexts: ["selection"],
    id: "open-with-nearpod"
    
  });

  chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === "open-with-nearpod") {
      console.log("got text: " + info.selectionText);
      chrome.tabs.create({ url: "https://app.nearpod.com/presentation?pin=" + info.selectionText })
    }
  });