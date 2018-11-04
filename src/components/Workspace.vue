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
    <login-modal v-if="!validToken" />
  </div>
</template>

<script>
import axios from 'axios'
import DirectoryCard from '@/components/DirectoryCard'
import FileCard from '@/components/FileCard'
import LoginModal from '@/components/LoginModal'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Workspace',
  data () {
    return {
      items: [],
      validToken: true
    }
  },
  computed: {
    ...mapState(['path', 'filters'])
  },
  components: {
    DirectoryCard,
    FileCard,
    LoginModal
  },
  methods: {
    ...mapMutations(['backPath']),
    updateItems () {
      axios.get('http://127.0.0.1:3000/api/directories',
        {
          params: { path: this.path.join('/') },
          headers: { Authorization: localStorage.token }
        }).then(res => {
        this.items = res.data.items
      }).catch(err => {
        if (err.response.status === 400) {
          this.validToken = false
        }
      })
    },
    getItems ({ isFile }) {
      return this.items.filter(x => {
        return (isFile ? x.isFile : !x.isFile) &&
               /* (this.showHidden ? true : x.name.substring(0, 1) !== '.') && */
               (this.filters.search ? this.filters.search.test(x.name) : true)
      })
    }
  },
  watch: {
    path () { this.updateItems() }
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
