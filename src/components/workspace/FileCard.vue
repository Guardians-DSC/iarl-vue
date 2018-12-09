<template>
  <div class="file-card" @mouseover="overCard = true" @mouseleave="overCard = false">
    <img v-if="overCard && !downloading" src="@/assets/download.png" alt="" @click="download()" class="download">
    <loader v-else-if="downloading"/>
    <img :src="iconPath" alt="">
    <p :title="fileName">{{ processedFileName }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import downloadjs from 'downloadjs'
import Loader from '@/components/Loader'

export default {
  name: 'FileCard',
  data () {
    return {
      overCard: false,
      downloading: false
    }
  },
  props: {
    fileName: String,
    extension: String
  },
  computed: {
    ...mapState(['path', 'user', 'activeWorkspace']),
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
    ...mapMutations(['updateUser']),
    download () {
      let downloadPath = this.path.slice()
      downloadPath.push(this.fileName)
      const config = {
        params: { path: downloadPath.join('/') },
        headers: { Authorization: this.user.token },
        responseType: 'blob'
      }
      axios.get(`${this.activeWorkspace.apiURL}/api/download`, config)
        .then(response => {
          downloadjs(response.data, this.fileName)
        })
        .catch(err => {
          if (err.response.status === 401) this.updateUser({})
        })
    }
  },
  components: {
    Loader
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
      transform: translate(0, 3px);
    }
    &:active {
      transform: scale(1.15);
    }
  }
}
</style>
