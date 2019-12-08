<template>
  <div>
    <div>我是危险的页面</div>
    <cilcle :rate="rate"></cilcle>
    <!-- <aAddress></aAddress> -->
    <panel :title="title" :desc="desc" :status="status"></panel>
  </div>
</template>

<script>
import cilcle from "../../common/circle";
// import aAddress from "../../common/address";
import panel from "../../common/panel";
export default {
  data() {
    return {
      rate: 40,
      title: "D2019",
      desc: [
        {
          name: "下单时间",
          date: new Date()
        },
        {
          name: "用餐时间",
          date: new Date()
        }
      ],
      status: "已接单"
    };
  },
  components: {
    cilcle,
    panel
    // aAddress
  }
};
</script>

<style scoped lang="stylus">
.van-cell-group /deep/ .van-panel__footer {
  display: flex;
  justify-content: flex-end;
}

.van-cell-group /deep/ .van-button--info {
  color: red;
  border: 1px solid #f00;
}

.van-cell-group /deep/ .van-hairline--top::after {
  border-top-width: 0px;
}
</style>
