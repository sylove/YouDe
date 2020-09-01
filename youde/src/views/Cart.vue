<template>
  <div>
    <Footer :isselected="selected"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "",
  data() {
    return {
      selected:'cartPage'
    };
  },
  components: {
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
