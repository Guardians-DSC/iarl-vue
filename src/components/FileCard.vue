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
  background: #fff;
  border: 1px solid #ddd;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #666;
  border-radius: 5px;
  margin: .1rem;
  width: 12rem;
  padding: 1rem 0;
  p {
    margin-top: 1rem;
  }
}
</style>
