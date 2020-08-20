<template>
  <div id="home">
    <!-- 头部导航 -->
    <InputSearch></InputSearch>

    <!-- 轮播区域 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="@/assets/images/banner1.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/images/banner2.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/images/banner3.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/images/banner4.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/images/banner5.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!--nav快捷区域 -->
    <section>
      <div class="navBox">
        <div>
          <img src="@/assets/images/nav-list1.png" alt />
          <span>全球购</span>
        </div>
        <div>
          <img src="@/assets/images/nav-list2.png" alt />
          <span>新人推荐</span>
        </div>
        <div>
          <img src="@/assets/images/nav-list3.png" alt />
          <span>明星产品</span>
        </div>
        <div>
          <img src="@/assets/images/nav-list4.png" alt />
          <span>家用理疗</span>
        </div>
      </div>
      <div class="navBox">
        <div>
          <img src="@/assets/images/nav-list5.jpg" alt />
          <span>会员日</span>
        </div>
        <div>
          <img src="@/assets/images/nav-list6.png" alt />
          <span>VIP专用</span>
        </div>
        <div>
          <img src="@/assets/images/nav-list7.png" alt />
          <span>限时特惠</span>
        </div>
        <div>
          <img src="@/assets/images/nav-list8.png" alt />
          <span>积分商城</span>
        </div>
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
          <mt-swipe-item>
            <div class="swipeImg">
              <img src="@/assets/images/buybanner1.jpg" alt />
            </div>
            <div class="swipeCon">
              <span class="fs12">全球购</span>
              <span class="fs14">加拿大进口</span>
              <span class="fs14">番茄红素</span>
              <p>团购价：￥122.9</p>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div class="swipeImg">
              <img src="@/assets/images/buybanner2.png" alt />
            </div>
            <div class="swipeCon">
              <span class="fs12">全球购</span>
              <span class="fs14">加拿大进口</span>
              <span class="fs14">番茄红素</span>
              <p>团购价：￥122.9</p>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div class="swipeImg">
              <img src="@/assets/images/buybanner3.jpg" alt />
            </div>
            <div class="swipeCon">
              <span class="fs12">全球购</span>
              <span class="fs14">加拿大进口</span>
              <span class="fs14">番茄红素</span>
              <p>团购价：￥122.9</p>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>

    <!-- 为您推荐 -->
    <div class="recommendBuy">
      <h2><img src="@/assets/images/recom-buy-title.jpg" alt=""></h2>
      <div class="recommendBuyCon">
        <figure>
          <img src="@/assets/images/banner3.jpg" alt="">
          <figcaption class="fs14">呵呵呵</figcaption>
          <p class="fs12">￥122.9</p>
        </figure>
        <figure>
          <img src="@/assets/images/banner3.jpg" alt="">
          <figcaption class="fs14">呵呵呵</figcaption>
          <p class="fs12">￥122.9</p>
        </figure>
        <figure>
          <img src="@/assets/images/banner3.jpg" alt="">
          <figcaption class="fs14">呵呵呵</figcaption>
          <p class="fs12">￥122.9</p>
        </figure>
        <figure>
          <img src="@/assets/images/banner3.jpg" alt="">
          <figcaption class="fs14">呵呵呵</figcaption>
          <p class="fs12">￥122.9</p>
        </figure>
      </div>
    </div>

    <!-- 页尾 -->
    <Footer></Footer>
  </div>
</template>
<script>
import InputSearch from "@/components/InputSearch";
import Footer from '@/components/Footer'
export default {
  data() {
    return {};
  },
  methods: {
    clickbtn() {
      console.log("嘤嘤嘤");
    },
  },
  components: {
    InputSearch,
    Footer
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
      div {
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
          p {
            margin-top: 0.12rem;
          }
        }
      }
    }
  }
  .recommendBuy {
    
  padding-bottom:0.54rem;
    h2 {
      width:1.2rem;
      margin:0.16rem auto 0.05rem;
      img{
        width:100%;

      }
    }
    .recommendBuyCon{
      width:100%; 
      display:flex;
      flex-wrap:wrap;
      // justify-content: space-around;
      figure{
        width:1.8rem;
        padding:0.15rem 0.15rem 0.04rem 0.15rem;
        box-sizing: border-box;
        background:@WhiteColor;
        &:nth-child(2n+1){
          margin:0.05rem 0.05rem 0 0.05rem;
        }
        &:nth-child(2n){
          margin-top:0.05rem;
        }
        img{
          width:100%;
        };
        figcaption{
          color:#303030;
          margin:0.03rem 0 0.12rem 0;
        }
        p{
          color:#e24f6b;
        }
      }
    }
  }
}
</style>
