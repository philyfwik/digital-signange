// Initialize variables
const signage = document.getElementById('signage-container');
const mainExp = document.getElementById('mainExp');
const leftVideo = document.getElementById('left-video');
const leftOverlay = document.getElementById('left-overlay');
const rightVideo = document.getElementById('right-video');
const rightOverlay = document.getElementById('right-overlay');
const takeOver = document.getElementById('takeOver');

let showingMainExp = true;

function showTakeOver() {
  takeOver.style.opacity = 1;
  mainExp.style.opacity = 0;
  leftVideo.pause();
  rightVideo.pause();
  clearInterval(displayTime);  // stop tracking currentTime of right and left displays
  showingMainExp = false;
  console.log('Displaying TakeOver Video');
  switchDisplay();
}

function showMainExperience() {
  takeOver.style.opacity = 0;
  mainExp.style.opacity = 1;
  leftVideo.play();
  rightVideo.play();
  showOverLay(2, 7.5);
  showingMainExp = true;
  console.log('Displaying Main Experience');
  switchDisplay();
}

// Show Overlay when left and right videos are within the minTime and maxTime window
let displayTime;  // to track playback time of displays every second
function showOverLay(minTime, maxTime) {
  displayTime = setInterval(() => {
    let time = rightVideo.currentTime;
    if (time < minTime || time > maxTime) {
      leftOverlay.style.opacity = 0;
      rightOverlay.style.opacity = 0;
    } else {
      leftOverlay.style.opacity = 1;
      rightOverlay.style.opacity = 1;
    }
  }, 1000);
}

// Toggle Displays
function switchDisplay() {
  if(showingMainExp == true) {
    setTimeout(showTakeOver, 30000);
  } else {
    setTimeout(showMainExperience, 5000);
  }
}

switchDisplay();
showOverLay(2, 7.5);