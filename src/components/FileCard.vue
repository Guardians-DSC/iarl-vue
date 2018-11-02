<template>
  <div class="file-card">
    <img src="@/assets/file.png" alt="">
    <p>{{ processedFileName }}</p>
  </div>
</template>

<script>
export default {
  name: 'FileCard',
  props: {
    fileName: String
  },
  computed: {
    processedFileName () {
      return this.fileName.substring(0, 20) + (this.fileName.length > 20 ? '...' : '')
    }
  }
}
</script>

<style lang="scss" scoped>
.file-card {
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
  background: #fff;
  p {
    margin: 1rem 0;
  }
}
</style>
