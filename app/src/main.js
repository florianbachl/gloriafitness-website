import App from './App.vue'
import { createApp } from 'vue';
import { router } from './routes/router';
import { store } from './store/index'
import Particles from "particles.vue3";
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueGtag from "vue-gtag";

const app = createApp(App)


app.use(VueGtag, {
    bootstrap: false,
    }, router)
app.use(store);
app.use(AOS.init());
app.use(router);
app.use(Particles);
app.use(VueAxios, axios)
app.mount('#app')