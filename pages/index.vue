<template>
  <v-container fluid class="ma-0">
    <v-row>
      <v-col class="text-center">
        <location-modal @location="getLocation" @address="getAddress" :list="listView" />
      </v-col>
    </v-row>
    <v-row v-if="listView">
      <v-col>
        <list :address="address" :restaurants="restaurants" @close="listView = false" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from '@/components/page/index/List';
import LocationModal from '@/components/utils/LocationModal';

export default {
  layout: 'home',
  components: {
    List,
    LocationModal
  },
  data () {
    return {
      location: {
        latitude: 41.874,
        longitude: -87.649
      },
      address: '',
      restaurants: [],
      listView: false
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
          console.log('Entered getLocation with location:', this.location.latitude, this.location.longitude, 'and address:', this.address);
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
      console.log('entered this.search');
      const url = '/search';

      const instance = this.$axios.create({
        baseURL: 'http://0.0.0.0:3000/'
        // timeout: 1000
        // headers: { 'X-Custom-Header': 'foobar' }
      });

      instance.$get(url, {
        params: {
          location: this.location
        }
      })
        .then((list) => { this.restaurants = list; })
        .then(() => { this.listView = true; })
        // .then((data) => {
        //   console.log('data:', data);
        // })
        .catch(err => console.log('error:', err));
    }
  }
};
</script>

<style>

</style>
