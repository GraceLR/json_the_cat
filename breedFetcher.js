
const breed = process.argv.slice(2);

const request = require('request');
const webAddr = 'https://api.thecatapi.com/v1/breeds';

request(webAddr, (error, response, body) => {

  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    process.exit(0);
  }

  const data = JSON.parse(body);
  const breedObj = data.find(ele => ele.name === breed[0]);
  if (breedObj === undefined) {
    console.log(`breed ${breed} not found`);
  } else {
    console.log(breedObj.description);
  }
      
});