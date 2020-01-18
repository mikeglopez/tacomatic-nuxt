<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <main-button
        v-on="on"
        dark
      >
        Location
      </main-button>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Find Tacos</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-row class="justify-center mb-8">
                <main-button dark>
                  Share Location
                </main-button>
              </v-row>
              <v-row class="justify-center mt-8">
                <main-button @click="showAddress = !showAddress" dark>
                  Enter an Address
                </main-button>
              </v-row>
              <v-row class="justify-center">
                <v-expand-transition>
                  <v-container v-show="showAddress">
                    <v-row>
                      <v-col cols="12">
                        <address-autocomplete
                          v-model="address"
                          label="Address"
                          outlined
                        ></address-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-expand-transition>
                <v-card-actions
                  v-show="showAddress"
                >
                  <div class="flex-grow-1"></div>
                  <v-btn @click="saveAddress()" color="primary">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <main-button
          @click="dialog = false"
          text
        >
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
    // eslint-disable-next-line
    close: Function
  },
  data () {
    return {
      dialog: false,
      showAddress: false,
      address: null
    };
  },
  methods: {
    saveAddress () {
      console.log('Address:', this.address);
    }
  }
};
</script>

<style>

</style>
