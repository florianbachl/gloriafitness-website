import App from './App.vue'
import { createApp } from 'vue';
import { router } from './routes/router';
import { store } from './store/index'
import VueGtag from "vue-gtag";


const app = createApp(App)


app.use(VueGtag, {
    bootstrap: false,
    }, router)
app.use(store);
app.use(router);
app.mount('#app')