<template>
  <v-dialog v-model="showList" :fullscreen="$vuetify.breakpoint.xs" persistent max-width="800px">
    <!-- <template v-slot:activator="{ on }">
      <main-button v-on="on" dark>
        Location
      </main-button>
    </template> -->
    <v-card>
      <v-app-bar flat>
        <v-btn @click="closeList" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>
          <span class="headline">Tacos Near {{ address.length ? address : 'You' }}</span>
        </v-toolbar-title>
      </v-app-bar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="7">
            <restaurant v-for="restaurant in visiblePage" :item="restaurant" :key="restaurant.id" />
          </v-col>
          <v-col cols="12" md="5" class="pl-0 pt-5" style="position:sticky; top:0;">
            <v-sheet color="grey">
              <v-skeleton-loader
                max-width="300"
                type="image"
              ></v-skeleton-loader>
            </v-sheet>
          </v-col>
          <v-pagination
            v-model="currPage"
            :length="pages"
          />
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Restaurant from '@/components/page/index/Restaurant';

export default {
  components: {
    Restaurant
  },
  props: {
    address: {
      type: String,
      default: ''
    },
    restaurants: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showList: true,
      currPage: 1,
      perPage: 4
    };
  },
  computed: {
    pages () {
      return Math.ceil(this.restaurants.length / this.perPage);
    },
    visiblePage () {
      return this.restaurants.slice((this.currPage - 1) * this.perPage, this.currPage * this.perPage);
    }
  },
  methods: {
    closeList () {
      this.showList = false;
      this.$emit('close');
    }
  }
};
</script>

<style>

</style>
