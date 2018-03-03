function banana() {
    setInterval(function() {
        var throttle_val = document.getElementById('throttle').value;
    }, 1000);
};
banana();

// document.getElementById('throttle').addEventListener('change');
