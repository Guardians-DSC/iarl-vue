<template>
  <div>
    <input type="text" class="search" placeholder="Buscar meu arquivo"
    @change="updateSearch(searchRegex)" v-model="search">
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
  methods: mapMutations(['updateSearch'])
}
</script>

<style lang="scss" scoped>
.search {
  border: none;
  background: #fff;
  padding: .6rem 1rem;
  border-radius: 3px;
  font-size: 1.1rem;
  &:focus {
    background: #fff;
    outline: none;
    box-shadow: 0 0 3px #888;
  }
}
</style>
