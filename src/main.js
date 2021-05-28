import { createApp } from 'vue'
import App from './App.vue'
import { Button, Layout, Menu } from "ant-design-vue";

import "ant-design-vue/dist/antd.css";

const app = createApp(App)
app.use(Button)
app.use(Layout)
app.use(Menu)
app.mount('#app')
