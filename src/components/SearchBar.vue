<template>
  <div class="search-bar">
    <button><img src="@/assets/lupa.png" alt=""></button>
    <input type="text" class="search" placeholder="Buscar meu arquivo" v-model="search">
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
  box-shadow: 0 0 3px #888;
}
.search {
  border: none;
  background: #fff;
  padding: .6rem 0rem;
  border-radius: 0 3px 3px 0;
  font-size: 1rem;
  &:focus {
    background: #fff;
    outline: none;
  }
}
button {
  background: #fff;
  border: none;
  border-radius: 3px 0 0 3px;
  padding: 0 .5rem;
  outline: none;
}
</style>
