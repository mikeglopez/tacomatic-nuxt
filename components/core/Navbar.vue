<template>
  <v-app-bar
    app
    class="navShadow"
    style="background-color:transparent;"
    dark
    flat
  >
    <main-button href="/" text light nuxt>
      <h2>
        Tacomatic
      </h2>
    </main-button>
    <v-spacer />
    <main-button text light>
      Restaurants
    </main-button>
    <main-button text light>
      Recipes
    </main-button>
    <main-button text light>
      Saved
    </main-button>
    <main-button text light>
      Login
    </main-button>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <!-- <v-toolbar-title>Page title</v-toolbar-title> -->
    <!-- <logo /> -->

    <!-- <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
  </v-app-bar>
</template>

<script>
// import Logo from '@/components/Logo';
import MainButton from '@/components/global/MainButton';

export default {
  components: {
    // Logo
    MainButton
  }
};
</script>

<style>
.navShadow * {
  text-shadow: 2px 2px 4px #000000;
}
</style>
