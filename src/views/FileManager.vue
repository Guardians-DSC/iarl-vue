<template>
  <div>
    <navbar class="nav"/>
    <tools-bar class="tools-bar"/>
    <workspace class="workspace"/>
    <login-modal v-if="!user.validToken" />
  </div>
</template>

<script>
import Workspace from '@/components/workspace/Workspace'
import Navbar from '@/components/navbar/Navbar'
import ToolsBar from '@/components/toolsbar/ToolsBar'
import LoginModal from '@/components/login/LoginModal'
import { mapState } from 'vuex'

export default {
  name: 'FileManager',
  components: {
    Workspace,
    Navbar,
    ToolsBar,
    LoginModal
  },
  computed: mapState(['user'])
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
