<template>
  <div>
    <inButton :type="type" @click.native="click"></inButton>
  </div>
</template>

<script>
import inButton from "../../common/button.vue";
export default {
  data() {
    return {
      type: "danger"
    };
  },
  methods: {
    click() {
      window.console.log(1);
      this.$router.push({
        name: "dangerr"
      });
    }
  },
  components: {
    inButton
  }
};
</script>

<style>
</style>
