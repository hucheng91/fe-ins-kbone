import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import { Button } from 'element-ui';
import { Collapse } from "element-ui";
import { CollapseItem } from "element-ui";
import {Image} from "element-ui"
import {Tabs  } from 'element-ui';
import {TabPane } from 'element-ui';
import { Loading } from 'element-ui';
//import  "element-ui/lib/theme-chalk/collapse.css";

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import 'element-ui/lib/theme-chalk/icon.css';
import 'element-ui/lib/theme-chalk/button.css';
import  "element-ui/lib/theme-chalk/collapse.css";
import  "element-ui/lib/theme-chalk/collapse-item.css";
import  "element-ui/lib/theme-chalk/image.css";
import   'element-ui/lib/theme-chalk/tabs.css';
import  'element-ui/lib/theme-chalk/tab-pane.css';
import  'element-ui/lib/theme-chalk/loading.css';
Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Image)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Loading)
Vue.config.productionTip = false
sync(store, router)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
