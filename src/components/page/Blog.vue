<template>
  <div class="mainbox">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainbox {
    width: 100%;
    /* height: 667rem; */
    /* background-color: yellowgreen; */

  }

</style>
