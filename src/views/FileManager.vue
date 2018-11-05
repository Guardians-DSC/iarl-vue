<template>
  <div>
    <navbar class="nav"/>
    <tools-bar class="tools-bar"/>
    <workspace class="workspace"/>
  </div>
</template>

<script>
import Workspace from '@/components/Workspace'
import Navbar from '@/components/Navbar'
import ToolsBar from '@/components/ToolsBar'

export default {
  name: 'FileManager',
  components: {
    Workspace,
    Navbar,
    ToolsBar
  }
}
</script>

<style lang="scss" scoped>
.tools-bar, .workspace {
  width: 78%;
  margin: auto;
}
.tools-bar {
  width: 80%;
  margin-top: 2rem;
}
</style>
