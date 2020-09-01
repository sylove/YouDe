<template>
  <div class="load">
    <mt-spinner type="fading-circle" color="#03a4d0" :size="40"></mt-spinner>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" scoped>
.load {
  position: fixed;
  top: 50%;
  left:50%;
  margin-top:-30px;
  margin-left:-30px;

}
</style>
