// background.js for Custom-FB-UI
chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript(tab.id, {file: "jquery-1.11.0.min.js"});
    chrome.tabs.executeScript(tab.id, {file: "jquery.slimscroll.min.js"});
    chrome.tabs.executeScript(tab.id, {file: "main.js"});
});

