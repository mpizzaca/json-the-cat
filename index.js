const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];


fetchBreedDescription(breedName, (err, data) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log(`Found ${data.length} result(s) for ${breedName}:`);
    console.log(data);
  }
});