<template>
  <div>
    <div class="row">
      <breadcrumb class="breadcrumb" />
      <img v-show="!hidden" src="../assets/eye-slash.png" @click="changeHidden(); hidden = true">
      <img v-show="hidden" src="../assets/eye.png" @click="changeHidden(); hidden = false">
    </div>
    <storage-bar free="30%" occupied="70%" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import StorageBar from '@/components/StorageBar'
import { mapMutations } from 'vuex'

export default {
  name: 'ToolsBar',
  data () {
    return {
      hidden: false
    }
  },
  components: {
    Breadcrumb,
    StorageBar
  },
  methods: mapMutations(['changeHidden'])
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  padding: 0 .5rem;
  margin-bottom: 1rem;
}
</style>
