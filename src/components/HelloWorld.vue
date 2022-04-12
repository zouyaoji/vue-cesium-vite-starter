<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-29 13:45:20
 * @LastEditTime: 2022-04-12 21:38:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-vite-starter\src\components\HelloWorld.vue
-->
<template>
  <div class="home viewer">
    <vc-viewer ref="viewerRef" @ready="onViewerReady">
      <vc-entity
        ref="entity"
        :billboard="billboard"
        :position="[108, 32]"
        :point="point"
        :label="label"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-rectangle
          :coordinates="[130, 20, 80, 25]"
          material="green"
        />
      </vc-entity>
      <vc-layer-imagery>
        <vc-imagery-provider-osm />
      </vc-layer-imagery>
      <vc-navigation />
      <vc-measurements :offset="[0, 40]" :on-fab-updated="onFabUpdated" />
      <vc-drawings
        position="bottom-right"
        :main-fab-opts="mainFabOpts"
        :offset="[0, 40]"
      />
    </vc-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  VcDrawingsProps,
  VcGraphicsBillboardProps,
  VcGraphicsLabelProps,
  VcGraphicsPointProps,
  VcViewerRef,
} from 'vue-cesium'
import { VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
const viewerRef = ref<VcViewerRef>(null)
// for debug only
// window.viewerRef = viewerRef

const mainFabOpts: VcDrawingsProps['mainFabOpts'] = {
  direction: 'left',
}
const point: VcGraphicsPointProps = {
  pixelSize: 28,
  color: 'red',
}
const label: VcGraphicsLabelProps = {
  text: 'Hello VueCesium',
  pixelOffset: [0, 80],
  fillColor: 'red',
}
const billboard = ref<VcGraphicsBillboardProps>({
  image: 'https://zouyaoji.top/vue-cesium/favicon.png',
  scale: 0.5,
})
const onViewerReady = (readyObj: VcReadyObject) => {
  console.log(readyObj.viewer)
}
const onEntityEvt = (e: VcPickEvent) => {
  console.log(e)
  if (e.type === 'onmouseover') {
    billboard.value = {
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      scale: 0.6,
    }
  } else if (e.type === 'onmouseout') {
    billboard.value = {
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      scale: 0.5,
    }
  }
}
// 在下个版本修复此props错误
const onFabUpdated = () => {
  //
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.viewer {
  height: 100vh;
}
</style>
