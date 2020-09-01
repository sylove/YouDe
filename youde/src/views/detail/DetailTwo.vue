<template>
  <div class="detailTwo">
      <Loading v-if="flag"></Loading>
    <div class="box resCon" v-html="resCon" v-else></div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";

export default {
  name: "",
  props: {
    isid: String,
    
  },
  data() {
    return {
      resCon: "",
      id: this.isid,
      flag:true
    };
  },
  methods: {
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
      // 处理HTML转义
      this.resCon = this.dealHTML(res.data.data.content);
      this.flag=false
    });
  },
  components:{
      Loading
  }
};
</script>

<style lang="less" scoped>
.detailTwo {
//   padding: 0 0.12rem 0.49rem;
//   background: #f0f1f2;
  .box {
    background: #fff;
    border-radius: 0.06rem;
    margin-bottom: 0.09rem;
    padding: 0.12rem 0.1rem;
  }
}
</style>
