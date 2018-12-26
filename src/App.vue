<template>
  <div id="app">
    <mt-header fixed title="梅子乐园"></mt-header>
    <mt-tab-container class="tabbar-container" v-model="selected">
      <mt-tab-container-item id="首页">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="slide1">
            <!-- <img style="width: 100%" src="./assets/cat/bosimao.jpg"> -->
          </mt-swipe-item>
          <mt-swipe-item class="slide2">
            <!-- <img src="./assets/cat/buoumao.jpg"> -->
          </mt-swipe-item>
          <mt-swipe-item class="slide3">
            <!-- <img src="./assets/cat/duanweimao.jpg"> -->
          </mt-swipe-item>
        </mt-swipe>
        <div>test</div>
      </mt-tab-container-item>

      <mt-tab-container-item id="我的">
        <div class="page-part">个人信息中心</div>
        <router-link to="/">
          <mt-button type="danger" size="large">退出</mt-button>
        </router-link>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <i class="fa fa-home fa-3x"></i>
        <br>首页
      </mt-tab-item>
      <mt-tab-item id="我的">
        <i class="fa fa-user fa-3x"></i>
        <br>我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: "首页"
    };
  },
  components: {}
};
</script>

<style lang="css">
.tabbar-container {
  padding-left: 0;
  padding-right: 0;
  margin-top: 40px;
}
.mint-swipe {
  height: 18.75rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.slide1 {
  /* background-color: #0089dc; */
  color: #fff;
  height: 18.75rem !important;
  background-image: url('assets/cat/bosimao.jpg');
  /* background-attachment: fixed;  */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size:100% 100%;
}
.slide2 {
  /* background-color: #ffd705; */
  color: #000;
  height: 18.75rem !important;
  background-image: url('assets/cat/buoumao.jpg');
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size:100% 100%;
}
.slide3 {
  /* background-color: #ff2d4b; */
  color: #fff;
  height: 18.75rem !important;
  background-image: url('assets/cat/duanweimao.jpg');
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size:100% 100%;
}
</style>
