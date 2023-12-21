  // LoadBar 
  let loadingProgressBar = document.querySelector('.loading-progress-bar')
  let loadingState = document.querySelector('.loading-state')
  
  window.addEventListener('message', function(e) {
      if(e.data.eventName === 'loadProgress') {
          loadingProgressBar.style.width = parseInt(e.data.loadFraction * 100) + "%"
      } else if(e.data.eventName == "onLogLine") {
          loadingState.innerHTML = e.data.message
      }
  });



var play = false;
var vid = document.getElementById("loading");
vid.volume = 0.2;
window.addEventListener('keyup', function(e) {
    if (e.which == 38) { // ArrowDOWN
        vid.volume = Math.min(vid.volume + 0.025, 1);
    } else if (e.which == 40) { // ArrowUP
        vid.volume = Math.max(vid.volume - 0.025, 0);
    };
});

var audio = document.querySelector('audio');

if (audio) {

    window.addEventListener('keydown', function(event) {

        var key = event.which || event.keyCode;
        var x = document.getElementById("text").innerText;
        var y = document.getElementById("text");

        if (key === 32 && x == "MUTE") { // spacebar

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "UNMUTE";

        } else if (key === 32 && x == "UNMUTE") {

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "MUTE";
        }
    });
}



function changePhoto() {
  var image = document.getElementById("imageroll");
  var randomNumber = Math.floor(Math.random() * 9) + 1; 
  var newImageSrc = randomNumber + ".jpg"; 

  image.src = newImageSrc; 
}

window.onload = changePhoto;



  
  


  