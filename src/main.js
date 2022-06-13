import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "@/utils/prototypes.js";

createApp(App).use(createPinia()).mount("#app");
