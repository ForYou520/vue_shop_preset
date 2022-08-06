import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//导入图标库
import "./assets/fonts/iconfont.css";

// 导入全局样式表
import "./assets/css/global.css";

import axios from "axios";
Vue.prototype.$http = axios;

axios.defaults.baseURL = "https://lianghj.top:8888/api/private/v1/";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
