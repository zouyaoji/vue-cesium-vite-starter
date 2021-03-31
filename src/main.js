import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/lib/theme-default/index.css'
import App from './App.vue'

// ts
// if (typeof (window as any).global === 'undefined') {
//   (window as any).global = window;
// }

window.global = window

createApp(App).use(VueCesium, {
  cesiumPath: './Cesium/Cesium.js'
}).mount('#app')
