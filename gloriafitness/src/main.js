import App from './App.vue'
import { createApp } from 'vue';
import { router } from './routes/router';
import { store } from './store/index'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(store);
app.use(router);
app.use(BootstrapVue3)
app.mount('#app')