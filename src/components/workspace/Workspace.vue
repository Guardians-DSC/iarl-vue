<template>
  <div class="workspace">
    <div class="directories">
      <directory-card v-for="(directory, key) in getItems({ isFile: false })" :key="key"
        :directoryName="directory.name" />
    </div>
    <div class="files">
      <file-card v-for="(file, key) in getItems({ isFile: true })" :key="key"
        :fileName="file.name" :extension="file.extension" />
    </div>
  </div>
</template>

<script>
import api from '@/api'
import DirectoryCard from '@/components/workspace/DirectoryCard'
import FileCard from '@/components/workspace/FileCard'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Workspace',
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapState(['path', 'user', 'activeWorkspace', 'filters'])
  },
  components: {
    DirectoryCard,
    FileCard
  },
  methods: {
    ...mapMutations(['updateUser']),
    updateItems () {
      const config = {
        params: { path: this.path.join('/') },
        headers: { Authorization: this.user.token }
      }
      api.get('/api/directories', config)
        .then(res => {
          this.items = res.data.items
        })
        .catch(err => {
          if (err.response.status === 401) {
            this.updateUser({})
          }
        })
    },
    getItems ({ isFile }) {
      return this.items.filter(x => {
        return (isFile ? x.isFile : !x.isFile) &&
               (this.filters.hidden ? true : x.name.substring(0, 1) !== '.') &&
               (this.filters.search ? this.filters.search.test(x.name) : true)
      })
    }
  },
  watch: {
    path () { this.updateItems() },
    activeWorkspace () { this.updateItems() }
  },
  mounted () {
    this.updateItems()
  }
}
</script>

<style lang="scss" scoped>
.workspace {
  background: #fdfdfd;
  overflow-y: auto;
  height: 75vh;
}
.directories, .files {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 2rem;
}
</style>
