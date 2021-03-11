const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv.slice(2);

request(URL + breedName, (err, response, body) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`No results for ${breedName}`);
    } else {
      console.log(`Found ${data.length} result(s) for ${breedName}:`);
      console.log(data);
    }
  }
});