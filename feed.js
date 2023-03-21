const tile1 = document.getElementById('tile-1');
const tile2 = document.getElementById('tile-2');
const tile3 = document.getElementById('tile-3');
const tile4 = document.getElementById('tile-4');

let feedInfo = [];

// remove commas from string
function removeCommas(str) {
  while(str.search(',') >= 0) {
    str = (str + '').replace(',', '');
  }
  return str;
}

// evaluate each value
function formatNum(num) {
  let numLength = num.length;
  // remove decimal if it exists
  if (num.charAt(numLength - 3) == '.')
    num = num.substring(0, numLength - 3);
  // return formatted number
  if (numLength < 4) {
    return '$ ' + num;
  } else if (numLength < 7) {
    return '$ ' + num.substring(0, numLength - 3) + ',' + num.substring(numLength - 3);
  } else if (numLength < 10) {
    return '$ ' + num.substring(0, numLength - 6) + '  MILLION';
  } else if (numLength < 13) {
    if (num.charAt(numLength - 9) == '0') {
      return '$ ' + num.substring(0, numLength - 9) + ' BILLION';
    } else if (num.charAt(numLength - 9) == '1') {
      return '$ ' + num.substring(0, numLength - 9) + '.1' + ' BILLION';
    } else if (num.charAt(numLength - 9) == '2') {
      return '$ ' + num.substring(0, numLength - 9) + '.2' + ' BILLION';
    } else if (num.charAt(numLength - 9) == '3') {
      return '$ ' + num.substring(0, numLength - 9) + '.3' + ' BILLION';
    } else if (num.charAt(numLength - 9) == '4') {
      return '$ ' + num.substring(0, numLength - 9) + '.4' + ' BILLION';
    } else if (num.charAt(numLength - 9) == '5') {
      return '$ ' + num.substring(0, numLength - 9) + '.5' + ' BILLION';
    } else if (num.charAt(numLength - 9) == '6') {
      return '$ ' + num.substring(0, numLength - 9) + '.6' + ' BILLION';
    } else if (num.charAt(numLength - 9) == '7') {
      return '$ ' + num.substring(0, numLength - 9) + '.7' + ' BILLION';
    } else if (num.charAt(numLength - 9) == '8') {
      return '$ ' + num.substring(0, numLength - 9) + '.8' + ' BILLION';
    } else if (num.charAt(numLength - 9) == '9'){
      return '$ ' + num.substring(0, numLength - 9) + '.9' + ' BILLION';
    }
  }
}

// update all 4 tiles
function updateFeed() {
  let lmax = removeCommas(feedInfo.lmax.jackpot), l649 = removeCommas(feedInfo.l649.jackpot), dg = removeCommas(feedInfo.dg.jackpot), scratch = removeCommas(feedInfo.scratch.jackpot);

  if (isNaN(lmax) || lmax == 0) {
    tile1.textContent = '...';
  } else {
    tile1.textContent = formatNum(lmax);
  }

  if (isNaN(l649) || l649 == 0) {
    tile2.textContent = '...';
  } else {
    tile2.textContent = formatNum(l649);
  }

  if (isNaN(dg) || dg == 0) {
    tile3.textContent = '...';
  } else {
    tile3.textContent = formatNum(dg);
  }

  if (isNaN(scratch) || scratch == 0) {
    tile4.textContent = '...';
  } else {
    tile4.textContent = formatNum(scratch);
  }
}

// update left overlay
function updateOverlays() {
  let lmax = removeCommas(feedInfo.lmax.jackpot), l649 = removeCommas(feedInfo.l649.jackpot);

  if (isNaN(lmax) || lmax == 0) {
    leftOverlay.firstChild.textContent = '';
  } else {
    leftOverlay.firstChild.textContent = formatNum(lmax);
  }

  if (isNaN(l649) || l649 == 0) {
    rightOverlay.firstChild.textContent = '';
  } else {
    rightOverlay.firstChild.textContent = formatNum(l649);
  }
}

// update right overlay

// get feed info
async function getFeed() {
  const feedUrl = 'https://challenge.carmanahsigns.com';

  try {
    const response = await fetch(feedUrl);
    feedInfo = await response.json();
    updateFeed();
    updateOverlays();
    console.log(feedInfo);
  } catch(err) {
    console.log('Error Encountered: ' + err);
  }

  setTimeout(getFeed, 60000); // makes call to feed every 60s
}

getFeed();