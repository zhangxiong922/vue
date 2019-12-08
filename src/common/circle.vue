<template>
  <van-circle v-model="currentRate" :rate="rate" :speed="100" :text="text"/>
</template>

<script>
import Vue from "vue";
import { Circle } from "vant";

Vue.use(Circle);
export default {
  data() {
    return {
      currentRate: 0
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  props: {
    rate: {
      type: Number,
      default: 30
    }
  }
};
</script>

<style>
</style>
