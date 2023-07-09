const axios = require('axios');

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

async function checkUsername(username) {
  try {
    const response = await axios.head(`https://passport.twitch.tv/usernames/${username}`);
    const statusCode = response.status;
    console.log(`${username}: ${statusCode}`);
  } catch (error) {
    console.error(`An error occurred while checking user ${username}:`, error);
  }
}

async function checkUsernames() {
  const parallelRequestsCount = 20;

  for (let i = 0; i < usernames.length; i += parallelRequestsCount) {
    const promises = usernames
      .slice(i, i + parallelRequestsCount)
      .map(username => checkUsername(username));

    await Promise.all(promises);
  }
}

checkUsernames();
