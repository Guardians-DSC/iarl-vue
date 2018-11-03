<template>
  <div>
    <workspace />
  </div>
</template>

<script>
import axios from 'axios'
import Workspace from '@/components/Workspace'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'FileManager',
  components: {
    Workspace
  }
}
</script>
