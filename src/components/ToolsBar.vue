<template>
  <div class="tools-bar">
    <breadcrumb class="breadcrumb" />
    <div>
      <input type="checkbox" id="show-hidden" class="check-tag">
      <label class="tag" for="show-hidden">Arquivos ocultos</label>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
  name: 'ToolsBar',
  components: {
    Breadcrumb
  }
}
</script>

<style lang="scss" scoped>
.tools-bar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding-bottom: .5rem;
}
.back-arrow {
  background-image: url('../assets/back-arrow.png');
  width: 36px;
  height: 23px;
}
.back-arrow:hover {
  cursor: pointer;
}.check-tag {
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
