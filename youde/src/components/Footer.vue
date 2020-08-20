<template>
  <div class="footer">
    <!-- <router-link to="">
        <i class="iconfont icon-home-blue"></i>
        <span>首页</span>
    </router-link>
    <router-link to="">
        <i class="iconfont icon-leimupinleifenleileibie1-outline"></i>
        <span>分类</span>
    </router-link>
    <router-link to="">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
    </router-link>
    <router-link to="">
        <i class="iconfont icon-me0"></i>
        <span>我的</span>
    </router-link>-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="homePage">
        <i class="iconfont icon-home-blue" slot="icon"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="classPage">
        <i class="iconfont icon-leimupinleifenleileibie1-outline" slot="icon"></i>
        <span>分类</span>
      </mt-tab-item>
      <mt-tab-item id="cartPage">
        <i class="iconfont icon-gouwuche" slot="icon"></i>
        <span>购物车</span>
      </mt-tab-item>
      <mt-tab-item id="minePage">
        <i class="iconfont icon-me0" slot="icon"></i>
        <span>我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      selected: "homePage",
    };
  },
  watch: {
    selected(val, oldVal) {
      switch (val) {
        case "homePage":
          this.$router.push("/home");
          break;
        case "classPage":
          this.$router.push("/class");
          break;
        case "cartPage":
          this.$router.push("/cart");
          break;
        case "minePage":
          this.$router.push("/mine");
          break;
        default:
          this.$router.push("/");
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  .mint-tabbar {
      background:#f5f5f5;
    .mint-tab-item {
      &.is-selected {
          background-color:transparent;
      }
    }
  }
}
</style>
