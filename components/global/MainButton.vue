<template>
  <v-btn
    @click="$emit('click')"
    :class="btnClass"
    :href="href"
    :loading="loading"
    :outlined="outlined"
    :text="text"
    class="mainBtn"
    x-large
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    dark: Boolean,
    href: {
      type: String,
      default: ''
    },
    light: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    outlined: Boolean,
    text: Boolean
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    btnClass () {
      if (this.light) {
        if (!this.text) {
          return 'btnLight';
        }
      } else if (this.dark) {
        return 'btnDark';
      } else if (this.outlined) {
        return 'btnOutlined';
      } else {
        return 'btnText';
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/colors.scss";

.mainBtn {
  &.btnDark {
    background-color: $light-green !important;
    color: #FFFFFF !important;
  }

  &.btnLight {
    background-color: #FFFFFF !important;
    color: $light-green !important;
  }

  &.btnOutlined {
    border-width: 1px !important;
    background-color: #FFFFFF !important;
    border-color: $light-green !important;
    color: $light-green !important;
  }

  &.btnText {
    background-color: transparent;
    color: $light-green !important;

    &::before {
      background-color: transparent !important;
    }

    &:hover {
      color: $dark-green !important;
    }

    &.btnLight {
      color: #FFFFFF;
    }
  }
}
</style>
