<template>
  <div class="workspace">
    <div v-for="(item, key) in items" :key="key" class="card">
      <p class="wrap">{{ item.name.substring(0,40) }}{{ item.name.length > 40 ? '...' : '' }}</p>
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
  }
}
</script>

<style lang="scss" scoped>
.workspace {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  background: #444;
  width: 10rem;
  height: 1rem;
  padding: .5rem;
  height: auto;
  text-align: center;
}
.wrap { 
   white-space: pre-wrap;
   white-space: -moz-pre-wrap;
   white-space: -pre-wrap;
   white-space: -o-pre-wrap;
   word-wrap: break-word;
}
</style>
