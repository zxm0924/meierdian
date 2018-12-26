// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'font-awesome/css/font-awesome.min.css'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
// import Elmeent from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Element)
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(Mint)


import {
  Header,
  Tabbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Cell,
  Button,
  Swipe,
  SwipeItem,
  InfiniteScroll,
  Field

} from 'mint-ui'

Vue.config.productionTip = false
// Vue.use(BootstrapVue)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(InfiniteScroll)
Vue.component(Field.name, Field)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
