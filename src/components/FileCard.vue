<template>
  <div class="file-card">
    <img src="@/assets/download.png" alt="" @click="download()" class="download">
    <img :src="iconPath" alt="">
    <p :title="fileName">{{ processedFileName }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'FileCard',
  props: {
    fileName: String,
    extension: String
  },
  computed: {
    ...mapState(['path']),
    processedFileName () {
      return this.fileName.substring(0, 10) + (this.fileName.length > 10 ? '...' : '')
    },
    iconPath () {
      try {
        return require('@/assets/icons/' + this.extension.substring(1) + '.png')
      } catch (err) {
        return require('@/assets/icons/_blank.png')
      }
    }
  },
  methods: {
    download () {
      let downloadPath = this.path.slice()
      downloadPath.push(this.fileName)
      axios.get('http://127.0.0.1:3000/api/download',
        {
          params: { path: downloadPath.join('/') },
          headers: { Authorization: localStorage.token },
          responseType: 'blob'
        }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', this.fileName)
        document.body.appendChild(link)
        link.click()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.file-card {
  background: #fff;
  border: 1px solid #ddd;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #666;
  border-radius: 5px;
  margin: .1rem;
  width: 9rem;
  padding: 1rem 0;
  position: relative;
  user-select: none;
  p {
    margin-top: 1rem;
  }
  .download {
    position: absolute;
    right: .5rem;
    top: .5rem;
    cursor: pointer;
    &:hover {
      transform: translate(0, 1px);
    }
    &:active {
      transform: scale(1.1);
    }
  }
}
</style>
