import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
