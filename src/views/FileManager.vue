<template>
  <div class="workspace">
    <div class="header">
      <img src="@/assets/back-arrow.png" @click="backPath(path.length - 1)" class="back-arrow" alt="">
      <div class="bar">
        <breadcrumb class="breadcrumb" />
        <div class="tags">
          <input type="checkbox" id="show-hidden-tag" class="check-tag" v-model="showHidden">
          <label class="tag" for="show-hidden-tag">Arquivos ocultos</label>
        </div>
      </div>
    </div>
    <div class="archives">
      <div class="directories">
        <directory-card v-for="(directory, key) in directories" :key="key"
          :directoryName="directory.name" />
      </div>
      <div class="files">
        <file-card v-for="(file, key) in files" :key="key"
          :fileName="file.name" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Breadcrumb from '@/components/Breadcrumb'
import DirectoryCard from '@/components/DirectoryCard'
import FileCard from '@/components/FileCard'
import { mapState, mapMutations } from 'vuex'

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
        return !x.isFile && (this.showHidden ? true : x.name.substring(0, 1) !== '.')
      })
    },
    files () {
      return this.items.filter(x => {
        return x.isFile && (this.showHidden ? true : x.name.substring(0, 1) !== '.')
      })
    }
  },
  components: {
    Breadcrumb,
    DirectoryCard,
    FileCard
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
.header {
  padding: 1.2rem 0 .2rem 0;
  border-bottom: 1px solid #ccc;
  width: 90%;
  margin: auto;
  margin-bottom: 2rem;
}
.directories, .files {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
}
.breadcrumb {
  padding: 1rem 0;
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
  font-size: .8rem;
  user-select: none;
}
.tags {
  margin: 1rem;
}
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .5rem;
}
.back-arrow:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: all .2s;
}
</style>
