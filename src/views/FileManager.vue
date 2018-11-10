<template>
  <div>
    <navbar class="nav"/>
    <tools-bar class="tools-bar"/>
    <workspace class="workspace"/>
    <login-modal v-if="!user.validToken" />
  </div>
</template>

<script>
import Workspace from '@/components/Workspace'
import Navbar from '@/components/Navbar'
import ToolsBar from '@/components/ToolsBar'
import LoginModal from '@/components/LoginModal'
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
