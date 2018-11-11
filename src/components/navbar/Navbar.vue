<template>
  <div class="navbar">
    <h1 class="brand">I A R L</h1>
    <search-bar class="search-bar"/>
    <ul>
      <li v-for="(item, index) in navItems" :key="index"
      @click="updateWorkspace(item)"
      class="nav-item" :class="{ active: item.lab === activeWorkspace.lab }">
        {{ item.lab }}
      </li>
      <li>
        {{user.username}} | <span @click="logout" class="logout">logout</span>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchBar from '@/components/navbar/SearchBar'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      navItems: [
        {
          lab: 'LCC1',
          apiURL: 'http://127.0.0.1:3000'
        },
        {
          lab: 'LCC2',
          apiURL: 'http://127.0.0.1:3001'
        },
        {
          lab: 'LCC3',
          apiURL: 'http://127.0.0.1:3002'
        }
      ]
    }
  },
  computed: mapState(['activeWorkspace', 'user']),
  components: {
    SearchBar
  },
  methods: {
    ...mapMutations(['updateWorkspace', 'updateUser']),
    logout () {
      this.updateUser({})
      this.$router.push('Login')
    }
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
  .logout:hover {
    color: #555;
  }
  .active {
    font-weight: bolder;
    color: #31e4cc;
  }
}
</style>
