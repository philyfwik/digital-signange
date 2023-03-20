// Initialize variables
const signage = document.getElementById('signage-container');
const mainExp = document.getElementById('mainExp');
const leftVideo = document.getElementById('left-video');
const rightVideo = document.getElementById('right-video');
const takeOver = document.getElementById('takeOver');

let showingMainExp = true;

function showTakeOver() {
  takeOver.style.visibility = 'visible';
  //mainExp.style.visibility = 'hidden';
  leftVideo.pause();
  rightVideo.pause();
  showingMainExp = false;
  console.log('Displaying TakeOver Video');
  switchDisplay();
}

function showMainExperience() {
  takeOver.style.visibility = 'hidden';
  //mainExp.style.visibility = 'visible';
  leftVideo.play();
  rightVideo.play();
  showingMainExp = true;
  console.log('Displaying Main Experience');
  switchDisplay();
}

// Toggle Displays
function switchDisplay() {
  if(showingMainExp == true) {
    setTimeout(showTakeOver, 10000);
  } else {
    setTimeout(showMainExperience, 5000);
  }
}

switchDisplay();