import { createApp } from 'vue'
import index from './index.vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const App =  createApp(index)
App.mount('#index')

