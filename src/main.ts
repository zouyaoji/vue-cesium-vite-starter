import { createApp } from 'vue'
import App from './App.vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/lib/theme-default/index.css'

if (typeof (window as any).global === 'undefined') {
  (window as any).global = window
}
const app = createApp(App)
app.use(VueCesium, {
  // cesiumPath 是指引用的Cesium.js路径，如
  // cesiumPath: /static/Cesium/Cesium.js
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
  cesiumPath: './Cesium/Cesium.js',
  // 使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致 CesiumIon 的在线影像、地形加载失败
  // accessToken: 'Your Cesium Ion defaultAccessToken'
})
app.mount('#app')
