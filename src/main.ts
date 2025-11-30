import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import i18n from "@/config/locale/config";
import { router } from "@/router/router";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(router);

app.mount("#app");
