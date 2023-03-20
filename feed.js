

let feedInfo = [];

async function getFeed() {
  const feedUrl = 'https://challenge.carmanahsigns.com';

  try {
    const response = await fetch(feedUrl);
    feedInfo = await response.json();
    console.log(feedInfo);
    console.log(feedInfo.lmax.jackpot);
    console.log(feedInfo.l649.jackpot);
  } catch(err) {
    console.log('Error Encountered: ' + err);
  }

  setTimeout(getFeed, 60000); // makes call to feed every 60s
}

getFeed();