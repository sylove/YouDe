<template>
  <div>
    <Footer :isselected="selected"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: '',
  data(){
    return{
      selected:'minePage'
    }
  },
  components:{
    Footer
  }
}
</script>

<style lang="less" scoped>
</style>
