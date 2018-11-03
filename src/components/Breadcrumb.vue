<template>
  <div class="breadcrumb">
    <ul>
      <li @click="backPath(0)">Home</li>
      <li v-for="(directory, index) in path" :key="index" @click="backPath(index + 1)">
        {{ directory }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Breadcrumb',
  computed: {
    ...mapState(['path'])
  },
  methods: mapMutations(['backPath'])
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  user-select: none;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    color: #33c7c7;
    border-right: 1px solid #ddd;
    padding: 0 1rem;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      color: #777;
      border-right: none;
      text-decoration: none;
      cursor: default;
      padding-right: 0;
    }
  }
}
</style>
