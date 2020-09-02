<template>
  <div class="wrapper">
    <Loading v-if="flag"></Loading>
    <div class="classify" v-else>
      <!-- 头部 -->
      <header>
        <router-link to="/search" class="fs14">
          <i class="iconfont icon-fangdajing"></i>
          <span>请输入您想搜索的产品</span>
        </router-link>
      </header>

      <!-- 内容板块 -->
      <section>
        <!-- 导航 -->
        <nav>
          <ul>
            <li
              v-for="(item,index) in navList"
              :key="index"
              @click="changeCon(index)"
              :class="active == index?'active':''"
            >{{item.name}}</li>
          </ul>
        </nav>
        <!--内容部分  -->
        <div class="main">
          <div class="con" v-for="(item,index) in conContent" :key="index">
            <h2 class="fs14">{{item.name}}</h2>
            <div class="conList">
              <figure v-for="child in item.leaf" :key="child.id">
                <!-- 跳到列表页面 -->
                <router-link
                  :to="{name:'classifylist',params:{siteId:child.siteId,thridCategoryId:child.id,name:child.name}}"
                >
                  <!-- 接口无图片处理 -->
                  <img v-if="child.cover != '/img/error.jpg'" :src="child.cover" alt />
                  <img v-else src="@/assets/images/nopic.png" alt />

                  <figcaption>{{child.name}}</figcaption>
                </router-link>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Footer :isselected="selected"></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default {
  name: "",
  data() {
    return {
      selected: "classPage",
      navList: [],
      conContent: [],
      active: 0,
      flag: true,
    };
  },
  components: {
    Footer,
    Loading,
  },
  methods: {
    changeCon(n) {
      this.conContent = this.navList[n].leaf;
      this.active = n;
    },
  },
  created() {
    this.$axios({
      method: "post",
      url: "/youde/f/pc/s_10020/loadCategory",
    }).then((res) => {
      this.navList = res.data.data;

      // 初始化渲染
      this.changeCon(0);
      this.flag = false;
    });
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/public.less";

.classify {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f5f5f5;
  box-sizing: border-box;
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 0.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    background: #f5f5f5;
    a {
      width: 2.95rem;
      height: 0.3rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      background: #e6e8ef;
      color: @GrayColor;
      border-radius: 0.15rem;

      i {
        margin: 0 0.03rem 0 0.15rem;
        font-size: 20px;
      }
    }
  }

  section {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    nav {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 90vh;
      ul {
        position: fixed;
        left: 0;
        top: 0.4rem;
        li {
          width: 0.93rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.5rem;
          color: #464646;
          font-size: 14px;
          background: #fff;
          &.active {
            background: #f5f5f5;
            color: #3a84f6;
            position: relative;
            &:before {
              content: "";
              display: block;
              width: 0.04rem;
              height: 0.18rem;
              background: #3a84f6;
              position: absolute;
              left: 0.02rem;
              top: 0.15rem;
            }
          }
        }
      }
    }
    .main {
      flex: 3;
      display: flex;
      flex-direction: column;
      background: #f6f6f6;
      align-items: center;
      padding-bottom: 0.6rem;
      .con {
        width: 2.64rem;
        // height: 2rem;
        background: #fff;
        margin-bottom: 0.1rem;
        h2 {
          text-align: center;
          &:before {
            content: "";
            display: inline-block;
            width: 0.6rem;
            height: 0.07rem;
            background: url(~@/assets/images/title_lt.jpg);
            background-size: cover;
            margin-right: 0.05rem;
          }
          &:after {
            content: "";
            display: inline-block;
            width: 0.6rem;
            height: 0.07rem;
            background: url(~@/assets/images/title_rt.jpg);
            background-size: cover;
            margin-left: 0.05rem;
          }
        }
        .conList {
          display: flex;
          flex-wrap: wrap;
          figure {
            // flex: 1;
            width: 0.66rem;
            // height: 0.88rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0.11rem;
            figcaption {
              margin-top: 0.1rem;
              color: #3e4345;
              font-size: 12px;
              text-align: center;
              width: 0.5rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>
