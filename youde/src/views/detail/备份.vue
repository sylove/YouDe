<template>
  <div class="wrapper">
    <Loading v-if="flag"></Loading>

    <div class="detail" v-else>
      <!-- 导航 -->
      <nav>
        <i class="iconfont icon-fanhui" @click="goPage()"></i>
        <div>
          <span class="active">商品</span>
          <span>详情</span>
          <span>评论</span>
        </div>
      </nav>

      <!-- 轮播 -->
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,idx) in bannerList" :key="idx">
          <img :src="item.filepath" alt />
        </mt-swipe-item>
      </mt-swipe>

      <!-- 内容部分 -->
      <section>
        <div class="box intro">
          <h2 class="title">{{detailRes.title}}</h2>
          <i class="iconfont icon-fenxiang"></i>
        </div>
        <div class="box price">
          <p class="fs14">￥{{(detailRes.minPrice/100).toFixed(2)}}</p>
          <p>
            原价￥
            <span>{{(detailRes.maxPrice/100).toFixed(2)}}</span>
          </p>
        </div>
        <div class="box msg">
          <h2 class="fs14">
            <span>介绍</span>
            {{detailRes.recommendSpeech}}
          </h2>
          <div class="cuxiao">
            <span class="cu fs14">促销</span>
            <span class="reduce fs13">{{detailRes.postPrmTypeName}}</span>
            <span class="fs12 darkgray">{{detailRes.postPromotionName}}</span>
          </div>
          <div class="cuxiao" v-if="detailRes.prmTypeName">
            <span class="reduce fs13">{{detailRes.prmTypeName}}</span>
            <span class="fs12 darkgray">{{detailRes.promotionName}}</span>
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
        <div class="box" @click="chooseBuy">
          <h2 class="title">
            <span>选择规格</span>
            <!-- {{detailRes.spectypes}} -->
            <i class="iconfont icon-jinrujiantou"></i>
          </h2>
        </div>
        <div class="box user">
          <h3 class="fs13">商品评论</h3>
          <ul>
            <li v-for="item in commentList" :key="item.id">
              <div class="header">
                <div class="tou">
                  <img :src="item.commentUserHeadImg" alt />
                  <span>{{item.commentAccount}}</span>
                </div>
                <div class="star">
                  <i
                    class="iconfont icon-shoucang"
                    v-for="(child,idx) in item.descgrade"
                    :key="idx"
                  ></i>
                </div>
              </div>
              <p>{{item.commentContent}}</p>
            </li>
          </ul>
        </div>
        <div class="box resCon" v-html="resCon"></div>
      </section>

      <!-- 底部 -->
      <div class="footer">
        <div class="lt">
          <router-link to="/">
            <i class="iconfont icon-xinxi1"></i>
            <span>客服</span>
          </router-link>
          <router-link to="/">
            <i class="iconfont icon-shoucang"></i>
            <span>收藏</span>
          </router-link>
          <router-link to="/">
            <i class="iconfont icon-gouwuche1"></i>
            <span>购物车</span>
          </router-link>
        </div>
        <div class="join all">加入购物车</div>
        <div class="buy all">立即购买</div>
      </div>

      <!-- 弹窗 -->
      <mt-popup v-model="popupVisible" popup-transition="popup-up" position="bottom">
        <div class="con">
          <div class="header">
            <img src="@/assets/images/banner1.jpg" alt />
            <div class="msg">
              <p>￥4.90</p>
              <p class="fs14 midgray">库存 1221</p>
              <p class="fs14 midgray">已选 1包 (每包80抽)</p>
            </div>
          </div>
          <div class="guige">
            <h3 class="fs12 midgray">规格</h3>
            <div class="card fs14">
              <!-- <span class="active">一包</span>
              <span>hhh</span>-->
              <span v-for="item in guigeVal" :key="item.id">{{item.specValue}}</span>
            </div>
          </div>
          <div class="count">
            <span class="fs12 midgray">数量</span>
            <div class="num">
              <i class="iconfont icon-jianshao"></i>
              <span>1</span>
              <i class="iconfont icon-zengjia active"></i>
            </div>
          </div>
        </div>
        <div class="joincart fs13">加入购物车</div>
      </mt-popup>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import Loading from "@/components/Loading";

export default {
  name: "",
  data() {
    return {
      popupVisible: false,
      id: this.$route.params.id,
      bannerList: [],
      detailRes: "",
      guigeVal: [],
      resCon: "",
      commentList: [],
      flag: true,
    };
  },
  methods: {
    chooseBuy() {
      this.popupVisible = true;
    },
    goPage() {
      this.$router.go(-1);
    },
    // HTML转义
    dealHTML(a) {
      a = "" + a;
      return a
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
    },
  },

  created() {
    this.$axios({
      method: "post",
      url: `/youde//f/pc/s_10020/goods/ajax/goods?id=${this.id}`,
    }).then((res) => {
      this.detailRes = res.data.data;
      this.bannerList = this.detailRes.pictures;
      this.guigeVal = this.detailRes.specValues;

      // 处理HTML转义
      this.resCon = this.dealHTML(this.detailRes.content);

      // 加载状态结束
      this.flag = false;
    });

    //评论
    this.$axios({
      method: "post",
      url: "/youde/f/pc/s_10020/spComment/findGoodsCommentList",
      // vue项目中form data形式传参
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      data: qs.stringify({
        businessId: this.id,
        pageIndex: "1",
        gradeLevel: "0",
      }),
    }).then((res) => {
      this.commentList = res.data.data;
      console.log(this.commentList);
    });
  },
  mounted() {},
  components: {
    Loading,
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/public.less";

.detail {
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
      
      // border-radius: 0.08rem;
      // overflow: hidden;
      span {
        width: 0.67rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        // border-right: 1px solid #4a7bc6;
        border: 1px solid #4a7bc6;
        &:nth-of-type(1) {
          border-right: 0;
          border-radius:0.08rem 0 0 0.08rem;
        }
        &:nth-of-type(2) {
          border-right: 0;
        }
        &:nth-of-type(3) {
          border-radius:0 0.08rem 0.08rem 0;
        }
        &.active {
          background: #4a7bc6;
          color: #fff;
        }
      }
    }
  }
  .mint-swipe {
    margin-top: 0.4rem;
    height: 3.75rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  section {
    padding: 0 0.12rem 0.49rem;
    background: #f0f1f2;
    .box {
      background: #fff;
      border-radius: 0.06rem;
      margin-bottom: 0.09rem;
      padding: 0.12rem 0.1rem;
    }
    .intro {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        color: #333;
        width: 2.95rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .price {
      p:nth-child(1) {
        color: #d83c2a;
        margin-bottom: 0.12rem;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: #999;
        span {
          font-size: 10px;
          text-decoration: line-through;
        }
      }
    }
    h2 {
      color: #666;
      font-weight: bold;
      position: relative;
      .iconfont {
        position: absolute;
        top: 0;
        right: 0;
        color: #737b82;
      }
      span {
        font-size: 14px;
        color: #999;
        margin-right: 0.1rem;
        font-weight: normal;
      }
    }

    .msg {
      .cuxiao {
        display: flex;
        align-items: center;
        position: relative;
        .cu {
          color: #999;
        }
        .reduce {
          width: 0.6rem;
          height: 0.2rem;
          text-align: center;
          line-height: 0.2rem;
          border: 1px solid #d83c2a;
          border-radius: 3px;
          color: #d83c2a;
          margin: 0 0.1rem 0 0.12rem;
        }
        .iconfont {
          position: absolute;
          right: 0;
          top: 0.02rem;
        }
        &:nth-of-type(1) {
          margin: 0.15rem 0 0.08rem 0;
        }
        &:nth-of-type(2) {
          padding-left: 0.28rem;
        }
      }
    }
    .user {
      h3 {
        color: #848484;
      }
      li {
        margin-bottom: 0.1rem;
        padding-bottom: 0.1rem;
        border-bottom: 1px solid #eee;
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .tou {
            display: flex;
            align-items: center;
            img {
              width: 0.39rem;
              height: 0.39rem;
              border-radius: 50%;
              margin-right: 0.1rem;
            }
            span {
              font-size: 11px;
              color: #999;
            }
          }
          .star {
            .iconfont {
              color: #68b0e4;
            }
          }
        }
        p {
          font-size: 13px;
          color: #666;
          margin-top: 0.08rem;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 0.49rem;
    background: #f5f5f5;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    // align-items:center;
    .lt {
      width: 1.5rem;
      display: flex;

      a {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666;
        .iconfont {
          font-size: 20px;
        }
        span {
          font-size: 12px;
        }
      }
    }
    .all {
      flex: 1;
      color: #fff;
      text-align: center;
      line-height: 0.49rem;
      font-size: 14px;
    }
    .join {
      flex: 1;
      background: #f3b13e;
    }
    .buy {
      flex: 1;
      background: #dc3927;
    }
  }

  .mint-popup-bottom {
    width: 100%;
    .con {
      padding: 0.26rem 0.22rem 0 0.1rem;
      height: 3.6rem;
      .header {
        display: flex;
        img {
          width: 0.9rem;
          height: 0.9rem;
          border-radius: 2px;
          margin-right: 0.1rem;
        }
        .msg {
          p:nth-child(1) {
            color: #cd372e;
            margin: 0.04rem 0 0.15rem 0;
          }
          p:nth-child(2) {
            margin-bottom: 0.1rem;
          }
        }
      }
      .guige {
        h3 {
          margin: 0.14rem 0 0.08rem 0;
        }
        .card {
          display: flex;
          flex-wrap: wrap;
          span {
            // width: 1.35rem;
            height: 0.29rem;
            line-height: 0.29rem;
            text-align: center;
            border: 1px solid #464646;
            border-radius: 2px;
            color: #464646;
            margin: 0 0.1rem 0.1rem 0;
            padding: 0 0.1rem;

            &.active {
              color: #e25e57;
              border-color: #e25e57;
            }
          }
        }
      }
      .count {
        margin-top: 0.23rem;
        display: flex;
        justify-content: space-between;
        .num {
          span {
            margin: 0 0.28rem;
            color: #000;
          }
          .iconfont {
            font-size: 12px;
            color: #e9e9e9;

            &.active {
              color: #4faff8;
            }
          }
        }
      }
    }
    .joincart {
      height: 0.49rem;
      line-height: 0.49rem;
      width: 100%;
      background: #e25e57;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
