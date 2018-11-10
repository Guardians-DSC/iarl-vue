<template>
  <div class="directory-card"
    @mouseover="overCard = true" @mouseleave="overCard = false"
    @dblclick="addDirectory(directoryName)">
    <img src="@/assets/directory.png" alt="">
    <p :title="directoryName">{{ processedDirectoryName }}</p>
    <img src="@/assets/download.png" alt=""
    @click="download()"
    class="download"
    v-if="overCard">
    <login-modal v-if="!user.validToken"/>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import LoginModal from '@/components/LoginModal'

export default {
  name: 'DirectoryCard',
  data () {
    return {
      overCard: false
    }
  },
  props: {
    directoryName: String
  },
  computed: {
    ...mapState(['path', 'user', 'activeWorkspace']),
    processedDirectoryName () {
      return this.directoryName.substring(0, 10) + (this.directoryName.length > 10 ? '...' : '')
    }
  },
  components: {
    LoginModal
  },
  methods: {
    ...mapMutations(['addDirectory', 'updateUser']),
    download () {
      let downloadPath = this.path.slice()
      downloadPath.push(this.directoryName)
      axios.get(`${this.activeWorkspace.apiURL}/api/download`,
        {
          params: { path: downloadPath.join('/') },
          headers: { Authorization: this.user.token },
          responseType: 'blob'
        }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${this.directoryName}.zip`)
        document.body.appendChild(link)
        link.click()
      }).catch(err => {
        if (err.response.status === 400) {
          this.updateUser({})
        }
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
  cursor: pointer;
  user-select: none;
  img {
    margin-right: .5rem;
  }
  .download {
    position: absolute;
    right: 0;
    cursor: pointer;
    &:hover {
      transform: translate(0, 3px);
    }
    &:active {
      transform: scale(1.15);
    }
  }
}
</style>
