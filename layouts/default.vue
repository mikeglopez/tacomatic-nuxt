<template>
  <v-app>
    <h1
      class="mt-12 heading text-center primary--text display-4 font-weight-black"
    >
      Tacomatic
    </h1>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {};
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
  .heading {
    font-family: 'Permanent Marker', cursive !important;
  }
</style>
