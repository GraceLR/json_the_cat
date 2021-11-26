

const fetchBreedDescription = function(breedName, callback) {

  const request = require('request');
  const webAddr = 'https://api.thecatapi.com/v1/breeds';

  request(webAddr, (error, response, body) => {

    if (error) {
      callback(error, undefined);
      process.exit(0);
    }

    const data = JSON.parse(body);
    const breedObj = data.find(ele => ele.name === breedName);
    if (breedObj === undefined) {
      callback(`breed ${breedName} not found`, undefined);
    } else {
      callback(null, breedObj.description);
    }
  });

};

module.exports = { fetchBreedDescription };
