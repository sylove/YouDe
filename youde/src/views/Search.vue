<template>
  <div class="search">
    <!-- 头部 -->
    <nav>
      <div>
        <i class="iconfont icon-fangdajing"></i>
        <span>请输入您想搜索的产品</span>
      </div>
      <p class="fs14" @click="goBack">取消</p>
    </nav>

    <!--navbar-->
    <div class="navbar">
      <span @click="showCon(true)" :class="isActive ? 'active' : ''">商品</span>
      <span @click="showCon(false)" :class="isActive ? '' : 'active'">店铺</span>
      <p ref="animatenav"></p>
    </div>
    <div class="navcon" v-if="isActive">
      <h2>热门搜索</h2>
      <div class="list">
        <span>感冒灵</span>
        <span>金银花</span>
        <span>芦荟胶</span>
      </div>
    </div>
    <div class="navcon" v-if="!isActive">
      <h2>热门搜索</h2>
      <div class="list">
        <span>感冒灵2</span>
        <span>金银花2</span>
        <span>芦荟胶3</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      selected: "1",
      list1: ["商品"],
      list2: ["游戏"],
      isActive: true,
    };
  },
  methods: {
    showCon(n) {
      this.isActive = n;
      if(n){
        this.$refs.animatenav.style.left=0.8+'rem';
      }else{
        this.$refs.animatenav.style.left=2.7+'rem';
      }
      
    },
    goBack(){
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/public.less";

.search {
  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 0.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    color: @WhiteColor;
    border-bottom: 1px solid #b2b2b2;
    div {
      width: 2.95rem;
      height: 0.3rem;
      display: flex;
      align-items: center;
      font-size: @PrimarySize;
      background: #e6e8ef;
      color: @GrayColor;
      border-radius: 0.15rem;
      margin: 0 0.2rem 0 0.1rem;

      i {
        margin: 0 0.03rem 0 0.15rem;
        font-size: 20px;
      }
    }
    p {
      color: #464646;
    }
  }
  .navbar {
    // margin-top:0.4rem;
    border-bottom: 1px solid #ccc;
    background: #fefefe;
    position: fixed;
    top: 0.44rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    span {
      padding: 0.14rem 0 0.16rem 0;
      font-size: 13px;
      &.active {
        color: #4faff8;
      }
    }
    p {
      position: absolute;
      left: 0.8rem;
      bottom: 0;
      width: 0.27rem;
      height: 0.04rem;
      background: #4faff8;
      transition:0.2s ease-out;
    }
  }
  .navcon {
    padding: 1.2rem 0.15rem 0;
    h2 {
      color: #787878;
      font-size: 14px;
    }
    .list {
      margin-top: 0.12rem;
      span {
        font-size: 13px;
        color: #9e9fa0;
        background: #e6e8ef;
        padding: 0.07rem 0.1rem;
        border-radius: 0.2rem;
        border: 1px solid #dedede;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
