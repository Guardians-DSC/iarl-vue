<template>
  <div class="directory-card" @dblclick="addDirectory(directoryName)">
    <img src="@/assets/directory.png" alt="">
    <p>{{ processedDirectoryName }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'DirectoryCard',
  props: {
    directoryName: String
  },
  computed: {
    processedDirectoryName () {
      return this.directoryName.substring(0, 10) + (this.directoryName.length > 10 ? '...' : '')
    }
  },
  methods: mapMutations(['addDirectory'])
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
  img {
    margin-right: 1rem;
  }
}
</style>
