<template>
  <div class="wrapper">
    <Loading v-if="flag"></Loading>
    <div class="list" v-else>
      <nav>
        <router-link to="/">
          <i class="iconfont icon-fanhui"></i>
        </router-link>
        <span v-if="params.secondCategoryId == 'h_11240-s_10020'">明星产品</span>
        <span v-else-if="params.secondCategoryId == 'h_11067-s_10020'">家用理疗</span>
        <span v-else>VIP专区</span>
      </nav>
      <!-- vip专区 -->
      <section v-if="params.siteId == 'vip'">
        <router-link
          :to="{name:'detail',params:{id:item.jumpVal}}"
          class="list"
          v-for="item in vipRes.floorSmalls"
          :key="item.id"
        >
          <!-- 加一个判断解决 接口数据存在的问题 -->
          <div v-if="item.banner">
            <div v-for="one in JSON.parse(item.banner)" :key="one.id" class="innerbox">
              <div class="lt">
                <img :src="one.path" alt />
              </div>
              <div class="rt">
                <h2 class="fs13 midgray">{{one.name}}</h2>
                <p>￥{{(item.jumpVal/100).toFixed(2)}}</p>
              </div>
            </div>
          </div>
        </router-link>
      </section>
      <!-- 明星产品 家用理疗 -->
      <section v-else>
        <router-link
          :to="{name:'detail',params:{id:item.id}}"
          class="list"
          v-for="item in listRes"
          :key="item.id"
        >
          <div class="lt">
            <img :src="item.thumbnail" alt />
          </div>
          <div class="rt">
            <h2 class="fs13 midgray">{{item.title}}</h2>
            <p>￥{{(item.minPrice/100).toFixed(2)}}</p>
          </div>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";

export default {
  name: "",
  data() {
    return {
      params: this.$route.params,
      listRes: [],
      flag: true,
      vipRes: [],
    };
  },
  methods: {},
  created() {
    if (this.params.siteId == "vip") {
      this.$axios({
        method: "post",
        url: "/youde/f/pc/s_10020/advertising/list?type=17",
      }).then((res) => {
        this.vipRes = res.data.data[1];
        console.log(this.vipRes.floorSmalls[0].banner);

        this.flag = false;
      });
    } else {
      this.$axios({
        method: "post",
        url: `/youde/f/pc/s_10020/goods/list/json?${this.params.siteId}&${this.params.secondCategoryId}`,
      }).then((res) => {
        this.listRes = res.data.data;

        this.flag = false;
      });
    }
  },
  components: {
    Loading,
  },
};
</script>

<style lang="less" scoped>
.list {
  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100%;
    background: #f5f5f5;
    color: #333;
    text-align: center;
    .iconfont {
      position: absolute;
      left: 0.2rem;
      top: 0;
      color: #333;
    }
  }
  section {
    padding-top: 0.4rem;
    .list {
      display: flex;
      padding: 0.15rem 0 0.15rem 0.1rem;
      background: #fefefe;
      border-bottom: 1px solid #dddddd;

      .lt {
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .rt {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-size: 10px;
          color: #d9514b;
        }
      }
    }

    .innerbox {
      display: flex;
    }
  }
}
</style>
