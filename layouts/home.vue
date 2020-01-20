<template>
  <v-app :class="$vuetify.breakpoint.xs ? '': 'homeBg'">
    <navbar />
    <!-- <logo /> -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import Logo from '@/components/Logo';
import Navbar from '@/components/core/Navbar';

export default {
  components: {
    // Logo,
    Navbar
  },
  data () {
    return {};
  }
};
</script>

<style scoped>
.homeBg {
  background-image:url('https://i.imgur.com/8zHwgiS.jpg');
  background-position:left top;
  background-repeat:no-repeat;
  background-size: 100%
}
</style>
