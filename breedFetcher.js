const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breed, callback) => {
  request(URL + breed, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
