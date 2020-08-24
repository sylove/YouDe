<template>
  <div class="detail">
    <!-- 导航 -->
    <nav>
      <i class="iconfont icon-fanhui"></i>
      <div>
        <span class="active">商品</span>
        <span>详情</span>
        <span>评论</span>
      </div>
    </nav>
    <!-- 轮播 -->
    <!-- <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item,idx) in bannerList" :key="idx">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>-->
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="@/assets/images/banner1.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 内容部分 -->
    <section>
      <div class="box intro">
        <h2 class="title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h2>
        <i class="iconfont icon-fenxiang"></i>
      </div>
      <div class="box price">
          <p class="fs14">￥4.90</p>
          <p>原价￥<span>10.90</span></p>
      </div>
      <div class="box msg">
          <h2 class="fs14">五包包邮哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h2>
          <div class="cuxiao">
              <span>促销</span>
              <p>
                  <span>包满邮</span>
                  <span>满19.90包邮</span>
              </p>
            
          </div>
          <div class="cuxiao">
              <p>
                  <span>满减</span>
                  <span>每满10减1</span>
              </p>
              <i class="iconfont icon-gengduo"></i>
            
          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" scoped>
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
      border: 1px solid #4a7bc6;
      border-radius: 0.08rem;
      overflow: hidden;
      span {
        width: 0.67rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        border-right: 1px solid #4a7bc6;
        &:nth-of-type(3) {
          border-right: 0;
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
    padding: 0 0.12rem;
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
    .price{
        p:nth-child(1){
            color:#d83c2a;
            margin-bottom:0.12rem;
        }
        p:nth-child(2){
            font-size:12px;
            color:#999;
            span{
                font-size:10px;
                text-decoration: line-through;
            }

        }
    }
    .msg{
       h2{
           color:#666;
           font-weight:bold;
       } 
       h2:before{
           content:'介绍';
           font-size:14px;
           color:#999;
           margin-right:0.1rem;
           font-weight: normal;
       }
    }
  }
}
</style>
