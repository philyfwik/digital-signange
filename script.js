// Initialize variables
const signage = document.getElementById('signage-container');
const mainExp = document.getElementById('mainExp');
const leftVideo = document.getElementById('left-video');
const rightVideo = document.getElementById('right-video');
const takeOver = document.getElementById('takeOver');

let showingMainExp = true;

function showTakeOver() {
  takeOver.style.display = 'flex';
  mainExp.style.display = 'none';
  leftVideo.pause();
  rightVideo.pause();
  showingMainExp = false;
  console.log('Displaying TakeOver Video');
  switchDisplay();
}

function showMainExperience() {
  takeOver.style.display = 'none';
  mainExp.style.display = 'grid';
  leftVideo.play();
  rightVideo.play();
  showingMainExp = true;
  console.log('Displaying Main Experience');
  switchDisplay();
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