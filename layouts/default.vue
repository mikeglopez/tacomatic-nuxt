<template>
  <v-app>
    <logo />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Logo from '@/components/Logo';

export default {
  components: {
    Logo
  },
  data () {
    return {};
  }
};
</script>
