<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" class="ma-0 text-center">
        <h1
          :class="`${$vuetify.breakpoint.xs ? 'mobile-logo dark-green--text': 'white--text'} mt-7 text-center`"
        >
          Tacomatic
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

};
</script>
