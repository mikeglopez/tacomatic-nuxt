const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const app = express();
const googleToken = process.env.GOOGLEMAPS_API;
const yelpToken = process.env.YELP_API;

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';
const getRestaurants = require('./helpers/getRestaurants.js');
const getGeocode = require('./helpers/getGeocode.js');

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
    getRestaurants(yelpToken, location)
      .then((restaurants) => {
        const sorted = restaurants.data.businesses.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        res.status(200).send(sorted);
      })
      .catch(err => console.log('/search:', err));
  });

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
