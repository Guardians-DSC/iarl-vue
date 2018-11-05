<template>
  <div>
    <div class="row">
      <breadcrumb class="breadcrumb" />
      <div>
        <input type="checkbox" id="show-hidden" class="check-tag" @click="changeHidden">
        <label class="tag" for="show-hidden">Arquivos ocultos</label>
      </div>
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
  padding-bottom: .5rem;
}
.check-tag {
  display: none;
  &:checked + .tag {
    background: #3b9696;
    box-shadow: 0 5px 5px #ccc;
  }
}
.tag {
  background: #b9b9b9;
  padding: .5rem;
  color: #fff;
  font-size: .8rem;
  user-select: none;
}
</style>
