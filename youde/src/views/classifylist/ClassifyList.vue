<template>
  <div class="classifylist">
    <!-- 头部 -->
    <mt-header :title="params.name" fixed>
      <mt-button icon="back" @click="goback" slot="left"></mt-button>
    </mt-header>

    <!-- nav部分 -->
    <nav>
      <span
        v-for="(item,index) in navList"
        :key="index"
        @click="chooseNav(index)"
        :class="active == index ? 'active':''"
      >
        {{item}}
        <i v-if="item == '价格'" class="iconfont icon-paixu"></i>
      </span>
    </nav>

    <!-- 列表展示部分 -->
    <ul class="con">
      <li v-for="item in resList" :key="item.id">
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <div class="conlt">
            <img :src="item.thumbnail" alt />
          </div>
          <div class="conrt">
            <h2 class="fs14 darkgray">{{item.title}}</h2>
            <div class="activity" v-if="item.protations">
              <!-- 字符串转数组循环处理 -->
              <span v-for="con in item.protations.split(',')" :key="con">{{con}}</span>
            </div>
            <p class="price">￥{{(item.minPrice/100).toFixed(2)}}</p>
            <p class="guan">官方自营</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      params: this.$route.params,
      navList: ["新品", "销量", "价格", "筛选"],
      resList: [],
      active: 0,
      numflag:false
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    chooseNav(n) {
      this.active = n;
      if (n == 1) {
        return this.sortTime(this.resList, "createTime");
      }else if(n == 2){
          this.resList.sort(this.sortNum('salesVolume',this.numflag))
        //   正序和反序 来回切换
          this.numflag=!this.numflag;
      }
    },
    // 时间排序
    sortTime(array, key) {
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    },
    //销量排序
    sortNum(property,desc) {
            return function (a, b) {
                var value1 = a[property];
                var value2 = b[property];
                if(desc==true){
                    // 升序排列
                    return value1 - value2;
                }else{
                    // 降序排列
                    return value2 - value1;
                }
            }
        }
  },
  created() {
    this.$axios({
      method: "post",
      url: `/youde/f/pc/s_10020/goods/list/json?siteId=${this.params.siteId}&thridCategoryId=${this.params.thridCategoryId}`,
    }).then((res) => {
      this.resList = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
.classifylist {
  header {
    background: #f5f5f5;
    color: #333;
    height: 0.4rem;
  }
  nav {
    position: fixed;
    top: 0.4rem;
    width: 100%;
    height: 0.45rem;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      flex: 1;
      text-align: center;
      color: #3e4345;
      font-size: 13px;
      .iconfont {
        font-size: 9px;
      }
      &.active {
        color: #4992e2;
      }
    }
  }
  .con {
    margin-top: 0.85rem;

    li {
      padding: 0.1rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f5f5f5;
      a {
        display: flex;

        .conlt {
          width: 1rem;
          height: 1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .conrt {
          width: 2.45rem;
          h2 {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .activity {
            margin-top: 0.12rem;
            display: flex;
            span {
              border: 1px solid #d74d3e;
              color: #d74d3e;
              font-size: 10px;
              margin-right: 0.1rem;
              padding: 0.02rem 0.07rem;
            }
          }
          .price {
            font-size: 12px;
            color: #d74d3e;
            margin: 0.08rem 0 0.12rem 0;
          }
          .guan {
            font-size: 10px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
