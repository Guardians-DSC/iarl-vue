<template>
  <div class="directory-card" @dblclick="addDirectory(directoryName)">
    <img src="@/assets/directory.png" alt="">
    <p>{{ processedDirectoryName }}</p>
    <img src="@/assets/download.png" alt="" @click="download()" class="download">
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DirectoryCard',
  props: {
    directoryName: String
  },
  computed: {
    ...mapState(['path']),
    processedDirectoryName () {
      return this.directoryName.substring(0, 10) + (this.directoryName.length > 10 ? '...' : '')
    }
  },
  methods: {
    ...mapMutations(['addDirectory']),
    download () {
      axios.get('http://127.0.0.1:3000/api/download',
        {
          params: { path: this.path.join('/') + '/' + this.directoryName },
          headers: { Authorization: localStorage.token },
          responseType: 'blob'
        }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'file.zip')
        document.body.appendChild(link)
        link.click()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.directory-card {
  background: #fff;
  border: 1px solid #ddd;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  padding: 1rem;
  text-align: center;
  color: #666;
  width: 12rem;
  margin: .3rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  position: relative;
  cursor: default;
  user-select: none;
  img {
    margin-right: 1rem;
  }
  .download {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
}
</style>
