const puppeteer = require('puppeteer');
const fs = require('fs');

function* generateUsernames() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      for (let k = 0; k < alphabet.length; k++) {
        for (let l = 0; l < alphabet.length; l++) {
          yield alphabet[i] + alphabet[j] + alphabet[k] + alphabet[l];
        }
      }
    }
  }
}

const usernames = Array.from(generateUsernames());

async function checkUsername(browser, username) {
  const page = await browser.newPage();
  // Set user agent
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
  );

  // disable images, CSS and fonts from loading
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (['image', 'stylesheet', 'font'].includes(request.resourceType())) {
      request.abort();
    } else {
      request.continue();
    }
  });

  try {
    await page.goto(`https://www.twitch.tv/${username}`);
    await page.waitForTimeout(4000); // wait for 4s
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    if (bodyHTML.includes('Sorry. Unless you’ve got a time machine, that content is unavailable.')) {
      fs.appendFileSync('availableUsernames.txt', `${username} \n`);
    }
  } catch (error) {
    console.error(`An error occurred while checking user ${username}:`, error);
  } finally {
    await page.setContent('');
    await page.close();
  }
}

async function checkUsernames() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const parallelBrowsingCount = 20;

  let startIndex = 0;
  try {
    const availableUsernames = fs.readFileSync('available.txt', 'utf8').split('\n').filter(Boolean);
    startIndex = usernames.findIndex(username => !availableUsernames.includes(username));
  } catch (error) {
    console.error('An error occurred while reading available usernames:', error);
    return; // Stop execution if an error occurs
  }

  for (let i = startIndex; i < usernames.length; i += parallelBrowsingCount) {
    let promises = [];
    for (let j = 0; j < parallelBrowsingCount; j++) {
      if (usernames[i + j]) {
        promises.push(checkUsername(browser, usernames[i + j]));
      }
    }
    try {
      await Promise.all(promises);
    } catch (error) {
      console.error('An error occurred while checking usernames:', error);
    }
  }

  await browser.close();
}

checkUsernames();
