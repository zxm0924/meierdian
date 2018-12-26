<template>
  <div id="app">
    <mt-header fixed title="小雨的那个夏天"></mt-header>
    <mt-tab-container class="tabbar-container" v-model="selected">
      <mt-tab-container-item id="首页" ref="Menuscrolls">
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
        <div class="content">
          <ul>
            <li><a href="#">滑溜溜</a><i class="fa fa-pied-piper fa-lg"></i></li>
            <li><a href="#">过家家</a><i class="fa fa-pied-piper fa-lg"></i></li>
            <li><a href="#">做刺绣</a><i class="fa fa-pied-piper fa-lg"></i></li>
            <li><a href="#">摘酸球</a><i class="fa fa-pied-piper fa-lg"></i></li>
            <li><a href="#">刨洋芋</a><i class="fa fa-pied-piper fa-lg"></i></li>
            <li><a href="#">躲猫猫</a><i class="fa fa-pied-piper fa-lg"></i></li>
          </ul>
        </div>
        <div class="new">
          <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <!-- <li v-for="item in list">{{ item }}</li> -->
            <div class="new-main" v-for="item in list" :key="item.id">
              <img src="./assets/cat/002.jpg" alt />
              <div class="new-body">
                <span class="body-title">{{item.title}}</span>
                <p class="body">
                  {{item.body}}
                </p>
              </div>
            </div>
          </ul>
        </div>

      </mt-tab-container-item>

      <mt-tab-container-item id="我的">
        <div class="page-part">
          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
          <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
          <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
          <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
          <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
          <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
          <mt-field label="邮箱" state="success" v-model="email"></mt-field>
          <mt-field label="邮箱" state="error" v-model="email"></mt-field>
          <mt-field label="邮箱" state="warning" v-model="email"></mt-field>
        </div>
        <router-link to="/">
          <mt-button type="danger" size="large">退出</mt-button>
        </router-link>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <i class="fa fa-home fa-2x"></i>
        <br>首页
      </mt-tab-item>
      <mt-tab-item id="我的">
        <i class="fa fa-user fa-2x"></i>
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
        selected: "首页",
        list: [{
            title: '我有故事，你有酒',
            body: '别让时间掏空昔日同窗的情感.....'
          },
          {
            title: '青春',
            body: '曾以为青春是QQ签名里最后的倔强，原来青春在没有美颜和滤镜的相片里.....'
          },
          {
            title: '见面的酒',
            body: '以前关心用“踩”的，现在存在感用“赞”的“云”联系太久，何时见面约酒.....'
          }
        ],
        
      };
    },
    components: {},
    //     mounted() {
    //     document.addEventListener('scroll', () => {
    //     })
    //    }
    create() {
      this.initScroll();
    },
    methods: {
      initScroll() {
        this.menuScroll = new BScroll(this.$refs.Menuscrolls, {})

      },
      loadMore() {
        this.loading = true;
      }
    }

  };

</script>

<style lang="css">
  .mint-header {
    background-color: #0a192f;
  }

  /* .#7988a5 */
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
    margin-bottom: 10px;
  }

  .slide1 {
    /* background-color: #0089dc; */
    color: #fff;
    height: 18.75rem !important;
    background-image: url('assets/cat/1.jpg');
    /* background-attachment: fixed;  */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }

  .slide2 {
    /* background-color: #ffd705; */
    color: #000;
    height: 18.75rem !important;
    background-image: url('assets/cat/2.jpg');
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }

  .slide3 {
    /* background-color: #ff2d4b; */
    color: #fff;
    height: 18.75rem !important;
    background-image: url('assets/cat/3.jpg');
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }

  .content {
    height: 15rem;
    /* border:0.1rem solid red; */
  }

  .content ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .content ul li {
    width: 30.33%;
    /* flex-wrap: wrap; */
    height: 6.5rem;
    margin: 5px;
    background-color: #11acc7;
    text-align: center;
    line-height: 7.5rem;
    position: relative;
  }

  .content ul li:nth-child(1) {
    background-color: #446174;
  }

  .content ul li a {
    color: rgb(247, 247, 247);
    font-size: 16px;
    /* font-weight: 600; */
  }

  .content ul li i {
    position: absolute;
    top: 1.4rem;
    left: 2.7rem;
    color: #b0d9a5;
  }

  .new {
    /* height: 20rem; */
    height: auto;
    /* border:1px solid red; */
  }

  .new-main {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-left: 5px;

  }

  .new-main img {
    box-sizing: content-box;
    height: 5.5rem;
  }

  .new-main .new-body {
    flex: 1;
    /* background-color: green; */
  }

  .new-main .new-body .body-title {
    color: darkblue;
    padding-left: 10px;
  }

  .new-main .new-body .body {
    padding-left: 10px;
  }

</style>
````
