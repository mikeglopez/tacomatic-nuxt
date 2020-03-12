<template>
  <v-container fluid class="ma-0">
    <v-row>
      <v-col class="text-center">
        <location-modal @location="getLocation" @address="getAddress" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LocationModal from '@/components/utils/LocationModal';

export default {
  layout: 'home',
  components: {
    LocationModal
  },
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
    // Get users geolocation
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
    // Save users entered address to this.address and long/lat to location
    getAddress (address) {
      new Promise((resolve) => {
        this.address = address.formatted;
        this.location.latitude = address.geometry.location.lat();
        this.location.longitude = address.geometry.location.lng();
        resolve();
      })
        .then(() => {
          this.search();
        });
    },
    // Search for restaurants using location
    search () {
      this.$axios.$get('/search', {
        params: {
          location: this.location
        }
      })
        .then((list) => { this.restaurants = list; })
        .catch(err => console.log('error:', err));
    }
  }
};
</script>

<style>

</style>
