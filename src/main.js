import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalMixin from "./globalMixin";

const app = createApp(App);
app.mixin(globalMixin);

app.use(router);

app.mount('#app');
