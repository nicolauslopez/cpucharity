document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('toggle-miner');

    // set the initial state of the checkbox
    chrome.storage.sync.get("toggle_miner", function(data){
        if (data["toggle_miner"]){
            input.checked = true;
        } else {
            input.checked = false;
        }
      });


    input.addEventListener("change", function(){
        chrome.storage.sync.set({"toggle_miner": input.checked});
    });


});
