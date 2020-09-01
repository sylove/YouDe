<template>
  <div class="wrapper">
    <!-- 导航 -->
    <nav>
      <i class="iconfont icon-fanhui" @click="goPage()"></i>
      <div>
        <span v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" :class="{active:active==index}" :key="index">{{tab.type}}</span>
      </div>
    </nav>

    <!-- keep-alive组件不用每次都再请求-->
    <keep-alive>
      <component :is="currentView" :isid="id"></component>
    </keep-alive>
    
   
    
  </div>
</template>

<script>
import DetailOne from "@/views/detail/DetailOne";
import DetailTwo from "@/views/detail/DetailTwo";
import DetailThree from "@/views/detail/DetailThree";

export default {
  name: "",
  data() {
    return {
      
      id: this.$route.params.id,
      active:0,
      currentView:'DetailOne',
      tabs:[
        {
          type:'商品',
          view:'DetailOne'
        },
        {
          type:'详情',
          view:'DetailTwo'
        },
        {
          type:'评论',
          view:'DetailThree'
        }
      ]
    };
  },
  methods: {
   
    goPage() {
      this.$router.go(-1);
    },
    toggle(i,v){
      this.active=i;
      this.currentView=v;
    }
  },

  created() {},
  mounted() {},
  components: {
    DetailOne,
    DetailTwo,
    DetailThree,
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/public.less";
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.4rem;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .iconfont {
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
    color: #333;
  }
  div {
    display: flex;
    align-items: center;
    span {
      width: 0.67rem;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      border: 1px solid #4a7bc6;
      &:nth-of-type(1) {
        border-right: 0;
        border-radius: 0.08rem 0 0 0.08rem;
      }
      &:nth-of-type(2) {
        border-right: 0;
      }
      &:nth-of-type(3) {
        border-radius: 0 0.08rem 0.08rem 0;
      }
      &.active {
        background: #4a7bc6;
        color: #fff;
      }
    }
  }
}
.detail {
  section {
    padding: 0 0.12rem 0.49rem;
    background: #f0f1f2;
  }
  
}
</style>
