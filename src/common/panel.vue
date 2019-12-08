<template>
  <van-panel :title="title" :desc="desc" :status="status">
    <div slot="footer">
      <van-button size="mini" plain type="info">详细信息</van-button>
    </div>
  </van-panel>
</template>

<script>
import Vue from "vue";
import { Panel } from "vant";

Vue.use(Panel);
export default {
  data() {
    return {
      //   desc: this.desc
    };
  },
  //   computed: {
  //     desc() {
  //       let str = "";
  //       this.desc.forEach(v => {
  //         str += Object.keys(v) + ":   " + Object.values(v);
  //       });
  //       return str;
  //     }
  //   },
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: Array,
      default: () => []
    },
    status: {
      type: String,
      default: ""
    }
  }
};
</script>

<style >
</style>
