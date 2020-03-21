<template>
  <v-row class="align-center dark-gray--text">
    <v-col cols="4" md="4" class="pr-0">
      <v-img
        v-if="item.image_url"
        :height="imageSize"
        :width="imageSize"
        :src="item.image_url"
        style="border-radius:4px;"
      />
      <!-- <v-sheet v-else color="grey">
        <v-skeleton-loader
          :height="imageSize"
          :width="imageSize"
          type="image"
        ></v-skeleton-loader>
      </v-sheet> -->
      <v-icon v-else :size="imageSize">
        mdi-taco
      </v-icon>
    </v-col>
    <v-col cols="8" md="8">
      <v-row no-gutters>
        <h3>{{ item.name }}</h3>
      </v-row>
      <v-row no-gutters>
        <star-rating
          v-model="item.rating"
          :show-rating="false"
          :round-start-rating="false"
          :star-size="18"
          :active-color="red"
          read-only
        />{{ item.review_count }} {{ `${item.review_count === 1 ? 'Review' : 'Reviews'}` }}
      </v-row>
      <v-row v-if="item.display_phone" no-gutters>
        {{ item.display_phone }}
      </v-row>
      <v-row no-gutters>
        {{ item.location.display_address[0] }}
      </v-row>
      <v-row no-gutters>
        {{ item.location.display_address[1] }}
      </v-row>
      <v-row no-gutters>
        {{ (item.distance / 1609.344).toFixed(2) }} miles away
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  components: {
    StarRating
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      red: '#990000'
    };
  },
  computed: {
    imageSize () {
      return this.$vuetify.breakpoint.xs ? 90 : 125;
    }
  }
};
</script>

<style style="scss">

</style>
