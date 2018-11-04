<template>
  <div id="myModal" class="modal">
      <div class="modal-content">
        <p>Por favor, Faça o login novamente para
           sabermos se você ainda está aí :)</p>
        <button @click="redirect()">Vamos lá</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoginModal',
  methods: {
    redirect () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000;
  background-color: rgba(0,0,0,0.4);
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
  }
}
</style>
