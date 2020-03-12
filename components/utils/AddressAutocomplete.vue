<template>
  <v-text-field
    ref="autocomplete"
    v-model="autocompleteInput"
    :label="label"
    :placeholder="placeholder"
    outlined
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Address'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      autocomplete: null,
      autocompleteInput: null,
      location: {
        components: null,
        geometry: null,
        formatted: null
      }
    };
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.autocomplete = new google.maps.places.Autocomplete(this.$refs.autocomplete.$refs.input);
    this.autocomplete.addListener('place_changed', this.onPlaceChanged);
  },
  methods: {
    clear () {
      this.autocompleteInput = null;
      this.location = {
        geometry: null,
        formatted: null
      };
    },
    onPlaceChanged () {
      this.location.geometry = this.autocomplete.getPlace().geometry;
      this.location.formatted = this.autocomplete.getPlace().formatted_address;
      this.autocompleteInput = this.location.formatted;

      this.$emit('placeChanged', this.location);
    }
  }
};
</script>

<style>

</style>
