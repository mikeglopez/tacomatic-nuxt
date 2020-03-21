<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <main-button v-on="on" :loading="processing" dark>
        Location
      </main-button>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Find Tacos</span>
      </v-card-title>
      <v-card-text>
        <v-row class="justify-center mb-8">
          <main-button v-show="!showAddress" @click="getLocation" dark>
            Share Location
          </main-button>
        </v-row>
        <v-row class="justify-center mt-8">
          <main-button @click="showAddress = !showAddress" dark>
            Enter an Address
          </main-button>
        </v-row>
        <v-row class="justify-center mt-6 px-6">
          <v-expand-transition>
            <address-autocomplete
              ref="addr"
              @placeChanged="getAddress"
              v-show="showAddress"
              v-model="address"
              label="Address"
              outlined
            ></address-autocomplete>
          </v-expand-transition>
        </v-row>
        <v-row class="justify-center">
          <v-card-actions v-show="showAddress">
            <v-btn @click="saveAddress" color="primary">
              Save
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <main-button @click="dialog = false" text>
          Close
        </main-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AddressAutocomplete from '@/components/utils/AddressAutocomplete';
import MainButton from '@/components/global/MainButton';

export default {
  components: {
    AddressAutocomplete,
    MainButton
  },
  props: {
    list: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false,
      showAddress: false,
      address: null,
      processing: false
    };
  },
  watch: {
    list (newVal, oldVal) {
      if (newVal === false) {
        this.processing = false;
      }
    }
  },
  methods: {
    getLocation () {
      this.processing = true;
      this.$emit('location');
      this.dialog = false;
    },
    getAddress (address) {
      this.address = address;
    },
    saveAddress () {
      this.processing = true;
      this.$emit('address', this.address);
      this.dialog = false;
      this.showAddress = false;
      this.$refs.addr.clear();
    }
  }
};
</script>

<style>

</style>
