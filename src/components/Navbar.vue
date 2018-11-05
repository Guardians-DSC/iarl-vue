<template>
  <div class="navbar">
    <h1 class="brand">IARL</h1>
    <search-bar class="search-bar"/>
    <ul>
      <a href="#"><li class="lab">LCC1</li></a>
      <a href="#"><li class="lab">LCC2</li></a>
      <a href="#"><li class="lab">LCC3</li></a>
    </ul>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Navbar',
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli');

.navbar {
  padding: .5rem 3rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #33c7c7;
  .brand {
    font-family: 'Muli', sans-serif;
    font-weight: normal;
  }
  .lab {
    font-weight: normal;
    font-size: 1.3rem;
    color: #087583;
  }
  ul {
    list-style: none;
    li {
      display: inline-block;
      padding: 0 1rem;
    }
  }
}
</style>
