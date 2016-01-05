function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    }
    else {
        return null;
    }
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(tabId != null){
        if (tab.url.substr(0, 9) != 'chrome://')
            chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function(tabs) {
    var hostname = getHostName(tabs.url);
    var mxToolboxUrl = "http://mxtoolbox.com/SuperToolX.aspx?action=mx:"+hostname;
    chrome.tabs.create({ url: mxToolboxUrl });
});