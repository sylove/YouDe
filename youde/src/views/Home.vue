<template>
  <div class="wrapper">
    <Loading v-if="flag"></Loading>

    <div id="home" v-else>
      <!-- 头部导航 -->
      <InputSearch></InputSearch>

      <!-- 轮播区域 -->
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,idx) in bannerList" :key="idx">
          <img :src="item" alt />
        </mt-swipe-item>
      </mt-swipe>

      <!--nav快捷区域 -->
      <section>
        <div class="navBox">
          <router-link to="/globalBuy">
            <img src="@/assets/images/nav-list1.png" alt />
            <span>全球购</span>
          </router-link>
          <router-link to="#">
            <img src="@/assets/images/nav-list2.png" alt />
            <span>新人推荐</span>
          </router-link>
          <router-link
            :to="{name:'list',params:{siteId:'s_10020',secondCategoryId:'h_11240-s_10020'}}"
          >
            <img src="@/assets/images/nav-list3.png" alt />
            <span>明星产品</span>
          </router-link>
          <router-link
            :to="{name:'list',params:{siteId:'s_10020',secondCategoryId:'h_11067-s_10020'}}"
          >
            <img src="@/assets/images/nav-list4.png" alt />
            <span>家用理疗</span>
          </router-link>
        </div>
        <div class="navBox">
          <router-link to="/">
            <img src="@/assets/images/nav-list5.jpg" alt />
            <span>会员日</span>
          </router-link>
          <router-link :to="{name:'list',params:{siteId:'vip',secondCategoryId:'vip'}}">
            <img src="@/assets/images/nav-list6.png" alt />
            <span>VIP专用</span>
          </router-link>
          <router-link to="/">
            <img src="@/assets/images/nav-list7.png" alt />
            <span>限时特惠</span>
          </router-link>
          <router-link to="/">
            <img src="@/assets/images/nav-list8.png" alt />
            <span>积分商城</span>
          </router-link>
        </div>
      </section>

      <!-- 优德头条 -->
      <article class="fs12">
        <img src="@/assets/images/toutiao.jpg" alt />
        <span>网站公告</span>
        <span>抗击疫情，消杀产品你买我就送！</span>
      </article>

      <!-- 新人首单优惠 -->
      <div class="newCustom">
        <img src="@/assets/images/new-custom.jpg" alt />
      </div>

      <!-- three图 -->
      <div class="recommend">
        <div>
          <img src="@/assets/images/tuijian1.jpg" alt />
        </div>
        <div>
          <img src="@/assets/images/tuijian2.jpg" alt />
        </div>
        <div>
          <img src="@/assets/images/tuijian3.jpg" alt />
        </div>
      </div>

      <!-- 今日团购 -->
      <div class="teamBuy">
        <div class="teamLogo">
          <img src="@/assets/images/buy-logo.jpg" alt />
        </div>
        <div class="teamSwipe">
          <mt-swipe :auto="3000" :show-indicators="false">
            <mt-swipe-item v-for="(item,idx) in teamBuyList" :key="idx">
              <router-link :to="{name:'detail',params:{id:item.goodsId}}">
                <div class="swipeImg">
                  <img :src="item.thumbnail" alt />
                </div>
                <div class="swipeCon">
                  <p>
                    <span class="fs12">全球购</span>
                    <span class="fs14">{{item.title}}</span>
                  </p>
                  <p></p>
                  <p>团购价：￥{{item.price/100}}</p>
                </div>
              </router-link>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>

      <!-- 为您推荐 -->
      <div class="recommendBuy">
        <h2>
          <img src="@/assets/images/recom-buy-title.jpg" alt />
        </h2>
        <div class="recommendBuyCon">
          <figure v-for="(item,idx) in recommendBuyList" :key="idx">
            <router-link :to="{name:'detail',params:{id:item.id}}">
              <img :src="item.thumbnail" alt />
              <figcaption class="fs14">{{item.title}}</figcaption>
              <p class="fs12">￥{{item.maxPrice/100}}</p>
            </router-link>
          </figure>
        </div>
      </div>

      <!-- 页尾 -->
      <Footer :isselected="selected"></Footer>
    </div>
  </div>
</template>
<script>
import InputSearch from "@/components/InputSearch";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default {
  data() {
    return {
      bannerList: [],
      teamBuyList: [],
      recommendBuyList: [],
      flag: true,
      selected:'homePage'
    };
  },
  methods: {},
  created() {
    // 轮播区域
    this.$axios({
      method: "post",
      url: "/youde/f/pc/s_10020/advertising/list?type=11",
      data: {},
    }).then((res) => {
      var res = res.data.data;
      this.bannerList = res.map((val, idx) => {
        // 字符串转json对象，嵌套循环
        let banner = JSON.parse(val.banner);
        return banner.map((newVal, idx) => {
          return newVal.path;
        });
      });
    });

    //推荐购买
    this.$axios({
      method: "post",
      url: "/youde/f/pc/s_10020/goods/recommend/list",
    }).then((res) => {
      this.recommendBuyList = res.data.data;
    });

    //今日团购
    this.$axios({
      method: "post",
      url: "/youde/f/pc/s_10020/spgroupbuying/list/json",
    }).then((res) => {
      this.teamBuyList = res.data.data;

      this.flag=false;
    });
  },
  mounted() {},
  components: {
    InputSearch,
    Footer,
    Loading,
  },
};
</script>
<style lang="less">
@import "~@/assets/less/public.less";

#home {
  background: #f0f1f3;
  .mint-swipe {
    height: 1.6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  section {
    width: 100%;
    margin: 0.1rem 0;
    background: @WhiteColor;

    .navBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 0.05rem;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
          width: 0.52rem;
        }
        span {
          font-size: 14px;
          color: #444;
          margin: 0.1rem 0 0.14rem 0;
        }
      }
    }
  }
  article {
    padding: 0.11rem 0.09rem;
    background: @WhiteColor;
    display: flex;
    align-items: center;
    img {
      width: 0.63rem;
    }
    span:nth-of-type(1) {
      padding: 0.06rem;
      color: #eb5368;
      border: 1px solid #eb5368;
      border-radius: 0.02rem;
      margin: 0 0.12rem;
    }
    span:nth-of-type(2) {
      color: #404040;
    }
  }
  .newCustom {
    margin: 0.1rem 0;
    img {
      width: 3.5rem;
      margin: auto;
    }
  }
  .recommend {
    display: flex;
    background: @WhiteColor;
    padding: 0.1rem 0;
    div {
      flex: 1;
      img {
        width: 100%;
      }
    }
  }
  .teamBuy {
    background: #ff5c5d;
    margin-top: 0.1rem;
    padding: 0.08rem 0;
    display: flex;
    align-items: center;
    .teamLogo {
      width: 0.44rem;
      margin: 0 0.18rem;
      img {
        width: 100%;
      }
    }
    .teamSwipe {
      width: 2.85rem;
      height: 0.68rem;
      .mint-swipe {
        height: 0.68rem;
      }
      .mint-swipe-item {
        display: flex;
        align-items: center;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          .swipeImg {
            width: 0.68rem;
            height: 0.68rem;
            background: @WhiteColor;
            border-radius: 0.06rem;
            overflow: hidden;
            // display: inline-block;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .swipeCon {
            color: @WhiteColor;
            margin-left: 0.14rem;
            p:nth-of-type(1) {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 2rem;
              span:nth-of-type(1) {
                display: inline-block;
                background: @WhiteColor;
                width: 0.48rem;
                height: 0.19rem;
                line-height: 0.19rem;
                text-align: center;
                color: #ff5c5d;
                border-radius: 0.03rem;
              }
              span:nth-of-type(2) {
                margin: 0 0.14rem 0 0.08rem;
              }
            }

            p:nth-of-type(2) {
              margin-top: 0.12rem;
            }
          }
        }
      }
    }
  }
  .recommendBuy {
    padding-bottom: 0.54rem;
    h2 {
      width: 1.2rem;
      margin: 0.16rem auto 0.05rem;
      img {
        width: 100%;
      }
    }
    .recommendBuyCon {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around;
      figure {
        width: 1.8rem;
        padding: 0.15rem 0.15rem 0.04rem 0.15rem;
        box-sizing: border-box;
        background: @WhiteColor;
        &:nth-child(2n + 1) {
          margin: 0.05rem 0.05rem 0 0.05rem;
        }
        &:nth-child(2n) {
          margin-top: 0.05rem;
        }
        img {
          width: 100%;
        }
        figcaption {
          color: #303030;
          margin: 0.03rem 0 0.12rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p {
          color: #e24f6b;
        }
      }
    }
  }
}
</style>
