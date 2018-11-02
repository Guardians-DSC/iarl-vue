<template>
  <div class="workspace">
    <breadcrumb class="breadcrumb" />
    <div class="directories">
      <div v-for="(directory, key) in directories" :key="key" class="card">
        <img src="@/assets/directory.png" alt="">
        <p>{{ directory.name.substring(0,20) }}{{ directory.name.length > 20 ? '...' : '' }}</p>
      </div>
    </div>
    <div class="files">
      <div v-for="(file, key) in files" :key="key" class="card">
        <img src="@/assets/file.png" alt="">
        <p>{{ file.name.substring(0,20) }}{{ file.name.length > 20 ? '...' : '' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Breadcrumb from '@/components/Breadcrumb'
import { mapState } from 'vuex'

export default {
  name: 'FileManager',
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapState(['path']),
    directories () {
      return this.items.filter(x => !x.isFile)
    },
    files () {
      return this.items.filter(x => x.isFile)
    }
  },
  components: {
    Breadcrumb
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
  width: 16rem;
  p {
    margin: 1rem 0;
  }
}
.directories .card {
  display: flex;
  align-items: center;
  img {
    margin-right: 1rem;
  }
}
.breadcrumb {
  margin: 1rem;
}
</style>
