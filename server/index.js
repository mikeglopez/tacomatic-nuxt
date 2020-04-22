const express = require('express');
const consola = require('consola');
const cors = require('cors');
const { Nuxt, Builder } = require('nuxt');

const app = express();
// const googleToken = process.env.GOOGLEMAPS_API;
const yelpToken = process.env.YELP_API;

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';
const getRestaurants = require('./helpers/getRestaurants.js');
// const getGeocode = require('./helpers/getGeocode.js');

app.use(cors());

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.get('/search', (req, res) => {
    const location = req.query;
    console.log('location:', location);
    getRestaurants(yelpToken, location)
      .then((restaurants) => {
        const sorted = restaurants.data.businesses.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        // const sorted = [{ display_phone: '(815) 123-4567', distance: 1234.56789012345, id: 'IDK123456abc', image_url: 'https://foodserviceyequipo.com/wp-content/uploads/2017/11/001-1030x690.jpg', location: { display_address: ['123 Main St', 'MyTown, CA 12345'] }, name: 'MikoMart', rating: 5, review_count: 1234 }];
        res.status(200).send(sorted);
      })
      .catch(err => console.log('/search:', err.response.statusText));
  });

  // No longer used with the addition of google maps autocomplete
  // app.get('/geocode', (req, res) => {
  //   const location = req.query;
  //   getGeocode(googleToken, location)
  //     .then((loc) => {
  //       res.status(200).send(loc.data.results[0].geometry.location);
  //     })
  //     .catch(err => console.log('/geocode:', err.response.statusText));
  // });

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
