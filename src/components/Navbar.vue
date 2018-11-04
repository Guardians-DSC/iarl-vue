<template>
  <div class="navbar">
    <h1>IARL</h1>
    <search-bar />
    <h2>LCC1</h2>
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
.navbar {
  padding: .5rem 3rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #33c7c7;
}
</style>
