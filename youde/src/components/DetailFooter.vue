<template>
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
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
.footer{
    width:100%;
    height:0.49rem;
    background:#f5f5f5;
    position:fixed;
    bottom:0;
    left:0;
    display:flex;
    // align-items:center;
    .lt{
        width:1.5rem;
        display:flex;
        
        a{
            flex:1;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color:#666;
            .iconfont{
                font-size:20px;
            }
            span{
                font-size:12px;
            }
        }
    }
    .all{
        flex:1;
        color:#fff;
        text-align:center;
        line-height:0.49rem;
        font-size:14px;
    }
    .join{
        flex:1;
        background:#f3b13e;

    }
    .buy{
        flex:1;
        background:#dc3927;
    }
    
}
</style>
