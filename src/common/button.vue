<template>
  <van-button :type="type">危险按钮</van-button>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "primary"
    }
  },
  methods: {}
};
</script>

<style>
</style>
