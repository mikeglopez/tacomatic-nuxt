<template>
  <v-container pa-0>
    <v-app-bar
      app
      class="navShadow hidden-sm-and-down"
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
      <v-toolbar-items>
        <main-button text light style="border-right: 1px solid;">
          Foodabase
        </main-button>
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
      </v-toolbar-items>
    </v-app-bar>
    <v-app-bar
      app
      class="hidden-md-and-up"
      style="background-color:transparent;"
      flat
    >
      <!-- <v-toolbar-items>
        <v-menu
          right
          bottom
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
              <v-app-bar-nav-icon />
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              @click="() => {}"
            >
              <v-list-item-title>Restaurants</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="() => {}"
            >
              <v-list-item-title>Recipes</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="() => {}"
            >
              <v-list-item-title>Saved</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="() => {}"
            >
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items> -->
      <v-row class="justify-center">
        <v-toolbar-items>
          <main-button class="mx-n4" style="font-size:0.7rem" text light>
            Restaurants
          </main-button>
          <main-button class="mx-n4" style="font-size:0.7rem" text light>
            Recipes
          </main-button>
          <main-button class="mx-n4" style="font-size:0.7rem" text light>
            Saved
          </main-button>
          <main-button class="mx-n4" style="font-size:0.7rem" text light>
            Login
          </main-button>
        </v-toolbar-items>
      </v-row>
    </v-app-bar>
  </v-container>
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
