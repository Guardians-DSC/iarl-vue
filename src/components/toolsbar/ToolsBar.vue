<template>
  <div>
    <div class="row">
      <breadcrumb class="breadcrumb" />
      <img v-show="!hidden" src="../../assets/eye-slash.png" @click="changeHidden(); hidden = true">
      <img v-show="hidden" src="../../assets/eye.png" @click="changeHidden(); hidden = false">
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/toolsbar/Breadcrumb'
import { mapMutations } from 'vuex'

export default {
  name: 'ToolsBar',
  data () {
    return {
      hidden: false
    }
  },
  components: {
    Breadcrumb
  },
  methods: mapMutations(['changeHidden'])
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  padding: 0 .5rem;
  padding-bottom: 1rem;
  border-bottom: 5px solid #4bcac0;
}
</style>
