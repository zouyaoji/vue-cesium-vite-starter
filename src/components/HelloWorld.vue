<template>
  <!-- <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
  <div class="home viewer">
    <vc-viewer>
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
        <!-- <vc-graphics-rectangle
          :coordinates="[130, 20, 80, 25]"
          material="green"
        /> -->
      </vc-entity>
      <!-- <vc-layer-imagery>
        <vc-provider-imagery-osm />
      </vc-layer-imagery> -->
      <vc-navigation />
    </vc-viewer>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    const point = {
      pixelSize: 28,
      color: 'red',
    }
    const label = {
      text: 'Hello VueCesium',
      pixelOffset: [0, 80],
      fillColor: 'red',
    }
    const billboard = ref({
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      scale: 0.5,
    })
    const onEntityEvt = e => {
      console.log(e)
      if (e.type === 'onmouseover') {
        billboard.value = {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.6
        }
      } else if (e.type === 'onmouseout') {
        billboard.value = {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.5
        }
      }
    }
    return { count, point, label, billboard, onEntityEvt }
  },
})
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
