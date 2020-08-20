<template>
  <div class="inputBox">
    <!--未滚动时的nav  -->
    <nav v-if="!scroll" class="bgNone">
      <i class="iconfont icon-changyongtubiao2-54"></i>
      <router-link to="/search">
        <i class="iconfont icon-fangdajing"></i>
        <span>请输入您想搜索的产品</span>
      </router-link>
      <i class="iconfont icon-xinxi1"></i>
    </nav>
    <!-- 滚动时候的nav -->
    <nav v-else ref="scrollNav" class="bgHas">
      <i class="iconfont icon-changyongtubiao2-54"></i>
      <div>
        <i class="iconfont icon-fangdajing"></i>
        <span>请输入您想搜索的产品</span>
      </div>
      <i class="iconfont icon-xinxi1"></i>
    </nav>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      scroll: "",
      opacityVal:0,
    };
  },
  methods: {
    scollBot() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
        // 计算透明度的值
      this.opacityVal=this.scroll/100;
      this.$refs.scrollNav.style.opacity=this.opacityVal;
      
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scollBot);
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/public.less";
.inputBox {
  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index:1;
    height: 0.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    color: @WhiteColor;
    &.bgNone{
      background:none;
      opacity:1 !important;
    }
    &.bgHas{
     background: #03a4d0;

    }
    > i {
      width: 0.39rem;
      text-align: center;
      font-size:20px;
    }
    a {
      flex: 1;
      height: 0.3rem;
      display: flex;
      align-items: center;
      font-size: @PrimarySize;
      background: @WhiteColor;
      color: @GrayColor;
      border-radius: 0.15rem;
      i {
        margin: 0 0.03rem 0 0.15rem;
        font-size:20px;
      }
    }
  }
}

</style>
