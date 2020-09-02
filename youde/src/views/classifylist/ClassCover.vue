<template>
  <div class="classcover">
      <div @click="aa">出来</div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="right">...</mt-popup>
  </div>
</template>

<script>
export default {
  name: "",
  data(){
      return{
          popupVisible:true
      }
  },
  methods:{
      aa(){
          this.popupVisible=true
      }
  }
};
</script>

<style lang="less" scoped>
.classcover{
    .v-modal{
        opacity: 0.2;
    }
    .mint-popup{
        height:100%;
        width:3.2rem;
    }
}
</style>
