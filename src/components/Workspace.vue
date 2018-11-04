<template>
  <div class="workspace">
    <header>
      <div @click="backPath(path.length-1)" class="back-arrow" alt="Voltar"></div>
      <div>
        <breadcrumb class="breadcrumb" />
        <input type="text" v-model="search">
        <input type="checkbox" id="show-hidden" class="check-tag" v-model="showHidden">
        <label class="tag" for="show-hidden">Arquivos ocultos</label>
      </div>
    </header>
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
import axios from 'axios'
import Breadcrumb from '@/components/Breadcrumb'
import DirectoryCard from '@/components/DirectoryCard'
import FileCard from '@/components/FileCard'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Workspace',
  data () {
    return {
      items: [],
      showHidden: false,
      search: ''
    }
  },
  computed: {
    ...mapState(['path']),
    searchRegex () {
      let search = this.search
      if (this.search.startsWith('.')) {
        search = '\\' + search
      }
      return new RegExp('^' + search, 'i')
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
    },
    getItems ({ isFile }) {
      return this.items.filter(x => {
        return (isFile ? x.isFile : !x.isFile) &&
               (this.showHidden ? true : x.name.substring(0, 1) !== '.') &&
               (this.search ? this.searchRegex.test(x.name) : true)
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
header {
  padding: 1.2rem 0 .2rem 0;
  border-bottom: 1px solid #ccc;
  width: 90%;
  margin: auto;
  margin-bottom: 2rem;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 .5rem 0;
  }
}
.directories, .files {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
}
.files {
  margin-top: 2rem;
}
.check-tag {
  display: none;
  &:checked ~ .tag {
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
.back-arrow {
  background-image: url('../assets/back-arrow.png');
  width: 36px;
  height: 23px;
}
.back-arrow:hover {
  cursor: pointer;
}
</style>
