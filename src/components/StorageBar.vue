<template>
  <div>
    <div class="bar" @click="clicked = !clicked">
      <div class="color-bar" :style="{ width: free, background: '#93d448', color: '#305109' }">
        <div class="description" v-show="clicked">Espaço livre ({{free}})</div>
      </div>
      <div class="color-bar" :style="{ width: occupied, background: '#ed5a70', color: '#6d111f' }">
        <div class="description" v-show="clicked">Espaço ocupado ({{occupied}})</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StorageBar',
  data () {
    return {
      clicked: false
    }
  },
  props: {
    free: String,
    occupied: String
  }
}
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  cursor: pointer;
}
.color-bar {
  min-height: 5px;
  text-align: center;
}
.description {
  font-size: .7rem;
  padding: .2rem;
}
.hidden {
  display: none;
}
</style>
