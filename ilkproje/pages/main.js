import { createApp } from 'vue'
import index from './index.vue'
import { router } from "../.nuxt/router.js"
import { FontawesomeIcon } from '@fortawesome/fontawesome-svg-core';
import { library } from "@fortawesome/fontawesome-svg-core";

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import'../static/style.css';


  library.add(far);
  library.add(fab);
  library.add(fas);
  library.add(faUserSecret);
  library.add(FontawesomeIcon);
  import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
  


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// import 'vue3-carousel/dist/carousel.css';




import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const App =  createApp(index)
App.component('fa',FontawesomeIcon)

App.mount('#index');

