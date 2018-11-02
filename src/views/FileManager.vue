<template>
  <div class="workspace">
    <div class="directories">
      <div v-for="(item, key) in directories" :key="key" class="card">
        <img src="@/assets/directory.png" alt="">
        <p>{{ item.name.substring(0,20) }}{{ item.name.length > 20 ? '...' : '' }}</p>
      </div>
    </div>
    <div class="files">
      <div v-for="(item, key) in files" :key="key" class="card">
        <img src="@/assets/file.png" alt="">
        <p>{{ item.name.substring(0,20) }}{{ item.name.length > 20 ? '...' : '' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FileManager',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:3000/api/directories',
      {
        params: { path: 'Downloads' },
        headers: { Authorization: localStorage.token }
      }
    ).then(res => {
      this.items = res.data.items
    })
  },
  computed: {
    directories () {
      return this.items.filter(x => !x.isFile)
    },
    files () {
      return this.items.filter(x => x.isFile)
    }
  }
}
</script>

<style lang="scss" scoped>
.directories, .files {
  display: flex;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #eee;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  padding: .5rem;
  text-align: center;
  border-radius: 5px;
  color: #666;
  margin: 1rem;
  width: 15rem;
}
.directories .card {
  display: flex;
  align-items: center;
  img {
    margin-right: 1rem;
  }
}
</style>
