<template>
  <div class="navbar">
    <h1 class="brand">I A R L</h1>
    <search-bar class="search-bar"/>
    <ul>
      <li v-for="(item, index) in navItems" :key="index"
      @click="activeItem = index"
      class="nav-item" :class="{ active: activeItem === index }">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Navbar',
  data () {
    return {
      navItems: ['LCC1', 'LCC2', 'LCC3'],
      activeItem: -1
    }
  },
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli');

.navbar {
  padding: .7rem 3rem;
  color: #32adad;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0 3px 5px #ddd;
  .brand {
    font-family: 'Muli', sans-serif;
    font-weight: normal;
  }
  ul {
    list-style: none;
    li {
      display: inline-block;
      padding: 1rem;
      font-weight: normal;
      font-size: 1.2rem;
      color: #a5a5a5;
      cursor: pointer;
      user-select: none;
    }
  }
  .active {
    font-weight: bolder;
    color: #31e4cc;
  }
}
</style>
