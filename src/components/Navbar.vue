<template>
  <div class="navbar">
    <h1>IARL</h1>
    <input type="text" class="search" placeholder="Buscar meu arquivo" v-model="search">
    <h2>LCC1</h2>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
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
.search {
  border: none;
  background: #fff;
  padding: .6rem 1rem;
  border-radius: 3px;
  width: 40%;
  font-size: 1.1rem;
  &:focus {
    background: #fff;
    outline: none;
    box-shadow: 0 0 3px #888;
  }
}
</style>
