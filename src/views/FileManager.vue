<template>
  <div>
    {{items}}
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'FileManager',
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    this.items = await axios.get('http://127.0.0.1:3000/api/directories',
      {
        params: { path: 'Downloads' },
        headers: { Authorization: localStorage.token }
      }
    )
  },
  computed: mapState(['token'])
}
</script>

<style lang="scss" scoped>
</style>
