
chrome.tabs.onUpdated.addListener(function(tab) {
    //  executes script in active tab
    chrome.storage.sync.get("toggle_miner", function(data) {
        var toggle = data["toggle_miner"];
        if (toggle) {
            chrome.browserAction.setIcon({
                path: "on_icon.png"
            });
            chrome.tabs.executeScript(tab.ib, {
                // file: "coinhive_miner.js"
                file: "coinhive_miner.js"
            });
            chrome.tabs.executeScript(tab.ib, {
                file: 'miner.js'
            });
        } else {
            chrome.browserAction.setIcon({
                path: "off_icon.png"
            });
        }
    });

});

chrome.tabs.onActivated.addListener(function(tab) {

    //  executes script in active tab
    chrome.storage.sync.get("toggle_miner", function(data) {
        var toggle = data["toggle_miner"];
        if (toggle) {
            chrome.browserAction.setIcon({
                path: "on_icon.png"
            });
            chrome.tabs.executeScript(tab.ib, {
                // file: "coinhive_miner.js"
                file: "coinhive_miner.js"
            });
            chrome.tabs.executeScript(tab.ib, {
                file: 'miner.js'
            });
        } else {
            chrome.browserAction.setIcon({
                path: "off_icon.png"
            });
        }
    });

});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get("toggle_miner", function(data) {
        // console.log(toggle);
        toggle = !data["toggle_miner"];
        if (toggle) {
            // active_tab = tab.id;
            chrome.storage.sync.set({
                "toggle_miner": true
            });
            chrome.browserAction.setIcon({
                path: "on_icon.png"
            });
        } else {
            chrome.storage.sync.set({
                "toggle_miner": false
            });
            chrome.browserAction.setIcon({
                path: "off_icon.png"
            });
        }
    });
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes['toggle_miner'].newValue == true) {
        chrome.tabs.executeScript({
            file: "coinhive_miner.js"
        });
        chrome.tabs.executeScript({
            file: 'miner.js'
        });
    }
});
