<template>
  <div class="workspace">
    <breadcrumb class="breadcrumb" />
    <div class="tags">
      <input type="checkbox" id="show-hidden-tag" class="check-tag" v-model="showHidden">
      <label class="tag" for="show-hidden-tag">Ocultos</label>
    </div>
    <div class="directories">
      <directory-card v-for="(directory, key) in directories" :key="key"
        :directoryName="directory.name" />
    </div>
    <div class="files">
      <file-card v-for="(file, key) in files" :key="key"
        :fileName="file.name" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Breadcrumb from '@/components/Breadcrumb'
import DirectoryCard from '@/components/DirectoryCard'
import FileCard from '@/components/FileCard'
import { mapState } from 'vuex'

export default {
  name: 'FileManager',
  data () {
    return {
      items: [],
      showHidden: false
    }
  },
  computed: {
    ...mapState(['path']),
    directories () {
      return this.items.filter(x => {
        return !((x.name.substring(0, 1) === '.') ^ this.showHidden) && !x.isFile
      })
    },
    files () {
      return this.items.filter(x => {
        return !((x.name.substring(0, 1) === '.') ^ this.showHidden) && !x.isFile
      })
    }
  },
  components: {
    Breadcrumb,
    DirectoryCard,
    FileCard
  },
  methods: {
    updateItems () {
      axios.get('http://127.0.0.1:3000/api/directories',
        {
          params: { path: this.path.join('/') },
          headers: { Authorization: localStorage.token }
        }).then(res => {
        this.items = res.data.items
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
}
.directories, .files {
  display: flex;
  flex-wrap: wrap;
}
.breadcrumb {
  padding: 1rem;
}
.check-tag {
  display: none;
  &:checked ~ label {
    background: #3b9696;
    box-shadow: 0 5px 5px #ccc;
  }
}
.tag {
  background: #b9b9b9;
  padding: .5rem;
  color: #fff;
}
.tags {
  margin: 1rem;
}
</style>
