const axios = require('axios');

const getRestaurants = (key, location) => {
  let link = 'https://api.yelp.com/v3/businesses/search?term=tacos&categories=tacos,mexican&sort_by=distance';
  const loc = location.location;
  if (typeof loc === 'string' && loc.includes('latitude')) {
    const usrLoc = JSON.parse(loc);
    link += `&latitude=${usrLoc.latitude}&longitude=${usrLoc.longitude}`;
  } else {
    link += `&location=${loc}`;
  }
  return axios({
    method: 'GET',
    url: link,
    headers: {
      Authorization: `Bearer ${key}`
    }
  });
};

module.exports = getRestaurants;
