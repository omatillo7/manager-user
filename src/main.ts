import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/main.css";
import App from "./App.vue";
import "./index.css";
import "flag-icons/css/flag-icons.min.css";
// import { vMaska } from 'v-mask'



const app = createApp(App);
app.use(createPinia());
app.use(router);
// app.directive('maska', vMaska)
app.mount("#app");
