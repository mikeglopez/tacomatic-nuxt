<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <v-row>
          <v-btn
            @click="getLocation"
            class="mx-8"
            cols="4"
            color="secondary"
            dark
            x-large
          >
            Share Location
          </v-btn>
          <v-text-field
            cols="4"
            label="Address"
            outlined
          />
          <v-btn
            class="mx-3"
            cols="4"
            color="secondary"
            dark
            x-large
          >
            Find Tacos
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      location: {
        latitude: 41.874,
        longitude: -87.649
      },
      address: '',
      restaurants: []
    };
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.address = '';
          this.location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          this.search();
        });
      } else {
        alert('Geolocation is not supported by this browser. Please enter an address.');
      }
    },
    // TODO:
    search () {
      this.$axios.$get('/search', {
        params: {
          location: this.location
        }
      })
        .then((list) => { this.restaurants = list; })
        .catch(err => console.log('error:', err));
    }

    // app.get('/search', (req, res) => {
    //   const location = req.query;
    //   getRestaurants(yelpToken, location)
    //     .then((restaurants) => {
    //       const sorted = restaurants.data.businesses.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    //       res.status(200).send(sorted);
    //     })
    //     .catch(err => console.log('/search:', err.response.statusText));
    // });
  }
};
</script>

<style>

</style>
