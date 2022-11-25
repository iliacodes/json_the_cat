const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    callback(error, null)
    return;
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    callback("breed not found.", null)
    return;
  }

  callback(null, data[0].description);
  })
};

module.exports = { fetchBreedDescription };