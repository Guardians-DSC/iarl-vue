<template>
  <div class="search-bar">
    <button><img src="@/assets/lupa.png" alt=""></button>
    <input type="text" class="search" placeholder="Busque seus arquivos..." v-model="search">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SearchBar',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    searchRegex () {
      let search = this.search
      if (this.search.startsWith('.')) {
        search = '\\' + search
      }
      return new RegExp('^' + search, 'i')
    }
  },
  methods: mapMutations(['updateSearch']),
  watch: {
    search () {
      this.updateSearch(this.searchRegex)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
}
.search {
  border: none;
  background: #eee;
  padding: 1rem 1rem 1rem 0;
  border-radius: 0 50px 50px 0;
  font-size: 1rem;
  color: #555;
  width: 20rem;
  &:focus {
    outline: none;
  }
}
button {
  background: #eee;
  border: none;
  border-radius: 50px 0 0 50px;
  padding: 0 .5rem 0 1rem;
  outline: none;
}
</style>
