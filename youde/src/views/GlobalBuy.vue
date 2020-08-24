<template>
  <div class="global">
    <nav>
      <router-link to="/">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>全球购</span>
    </nav>
    <ul>
      <li v-for="(item,idx) in imgsUrl" :key="idx">
        <img :src="item" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      imgsUrl: [
        "https://pic.youde.com/0e99321cda3a7aa6128e25f4d0f59856.jpg",
        "https://pic.youde.com/dbeb2b9a980ec85fda73021b7cec351e.jpg",
        "https://pic.youde.com/193e39ad374d93d1b317a213060cd057.jpg",
        "https://pic.youde.com/758bf7cf60214f2d2140a20da82831ac.jpg",
        "https://pic.youde.com/54ec04e7dacb61965c170d4e6128fab6.jpg",
        "https://pic.youde.com/315fcc4755d55ab2c7ffc850e29d05c8.jpg",
        "https://pic.youde.com/754530d5312efb10d3b0d925d54bf311.jpg",
        "https://pic.youde.com/c40719bebe5dbbb34fce76b0e6e788ec.jpg",
        "https://pic.youde.com/0408efa1d604599741c9241fd8748840.jpg",
        "https://pic.youde.com/b67ba9ffc3898bb9758a4ae6049624eb.jpg",
        "https://pic.youde.com/72628f761dc1e21c232ba0f53034179f.jpg",
        "https://pic.youde.com/37d3cee5d370da72f8f326df148f606b.jpg",
        "https://pic.youde.com/7270129689dfa6d3fc8f384793815361.jpg",
        "https://pic.youde.com/a367683f03e65c1e4a285326f0ebb11a.jpg",
        "https://pic.youde.com/8820650a3a1e0e904dd07ecba87aadd9.jpg",
        "https://pic.youde.com/58dfa0aa902e421434cd83a5df47b44a.jpg",
        "https://pic.youde.com/46df75e77d05e5c3408968d4544ffd0e.jpg",
        "https://pic.youde.com/afd1183afaff3261fc7644e9c7861f3b.jpg",
        "https://pic.youde.com/1857ff8d3307a7fdb1288c844eb55086.jpg",
        "https://pic.youde.com/6f7165c84bc5880fd86941c2edaf582e.jpg",
        "https://pic.youde.com/cf7e9ac586b4f54e1b56407a5c514108.jpg",
        "https://pic.youde.com/151bac06f6fa5c7d29dab6ae762e3116.jpg",
        "https://pic.youde.com/23e247d9f521ff91c578c4a5e1b940d2.jpg",
        "https://pic.youde.com/1c17be89a0838074593983ec71bf6a03.jpg",
        "https://pic.youde.com/0a8cf1a267f9f32c66302a4bdd549dfe.jpg",
      ],
    };
  },
  methods: {},
  mounted() {
    // this.$axios({
    //   method: "post",
    //   url: "/youde/f/pc/s_10020/advertising/list?type=11",
    //   data: {},
    // }).then((res) => {
    //   console.log(res);
    // });
  },
};
</script>

<style lang="less" scoped>
.global {
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
  ul {
    padding-top: 0.4rem;
    img {
      width: 100%;
    }
  }
}
</style>
