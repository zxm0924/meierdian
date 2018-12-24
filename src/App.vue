<template>
  <div id="app">
    <nav class="header">
      <p class="header-content" href="#">恒信邦</p>
    </nav>
    <div class="main-content">
      <div class="topcontent"></div>
      <div class="butcontent">
        <ul>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot">
      <ul>
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">产品</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {}
  };
</script>

<style lang="css">
  .header {
    height: 3.5rem;
    background-color: skyblue;
    padding-left: 0.5rem;
  }
  
  .header-content {
    text-decoration: none;
    line-height: 50px;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
  }

  li {
    padding: 0;
    list-style: none;
  }

  ul {
    padding: 0px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .foot {
    position: fixed;
    bottom: 0;
    height: 3.5rem;
    width: 100%;
  }

  .foot ul {
    height: 100%;
    width: 100%;
    display: flex;
    /* background-color: pink; */
    padding: 0px;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    background-color: #282828;
  }

  .foot ul li {
    height: 100%;
    width: 50%;
    list-style: none;
    text-align: center;
  }

  .foot ul li:hover {
    background-color: #171a1b;
    color: #1b82c8;
  }

  .foot ul li a {
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    text-decoration: none;
  }

  .main-content {
    /* background-color: #e6aee1; */
    height: 685px;
    width: 100%;
    margin-bottom: 10px;
  }

  .main-content .topcontent {
    height: 400px;
    background-color: pink;
    width: 100%;
  }

  .main-content .butcontent {
    margin-top: 10px;
    height: 285px;
  }

  .main-content .butcontent ul {
    height: 100%;
    width: 100%;
    display: flex;
    /* background-color: pink; */
    padding: 0px;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .main-content .butcontent ul li {
    width: 29%;
    height: 120px;
    background-color: #0096ff;
  }
</style>
