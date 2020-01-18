<template>
  <v-text-field
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
  }
};
</script>

<style>

</style>
