<template>
  <v-container fluid class="ma-0">
    <v-row>
      <v-col class="text-center">
        <location-modal @location="getLocation" />
        <!-- <v-row>
          <v-col cols="12" md="2">
            <v-btn
              @click="getLocation"
              cols="4"
              color="secondary"
              dark
              x-large
            >
              Share Location
            </v-btn>
          </v-col>
          <v-col cols="12" md="8">
            <address-autocomplete
              v-model="address"
              label="Address"
            />
          </v-col>
          <v-col cols="12" md="1">
            <v-btn
              @click="getAddress(address)"
              color="secondary"
              dark
              x-large
            >
              Find Tacos
            </v-btn>
          </v-col>
        </v-row> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import AddressAutocomplete from '@/components/utils/AddressAutocomplete';
import LocationModal from '@/components/utils/LocationModal';
// import MainButton from '@/components/global/MainButton';

export default {
  layout: 'home',
  components: {
    // AddressAutocomplete
    LocationModal
    // MainButton
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
    search () {
      this.$axios.$get('/search', {
        params: {
          location: this.location
        }
      })
        .then((list) => { this.restaurants = list; })
        .catch(err => console.log('error:', err));
    },
    getAddress (address) {
      console.log(address);
    }
  }
};
</script>

<style>

</style>
