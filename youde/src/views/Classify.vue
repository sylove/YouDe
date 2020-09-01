<template>
  <div class="classify">
fdsfdsf

    <Footer :isselected="selected"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "",
  data(){
    return{
      selected:'classPage'
    }
  },
  components:{
    Footer
  }
};
</script>

<style lang="less" scoped>
.classify {
}
</style>
