<template>
  <div class="modal">
      <div class="modal-content">
        <p class="description">Por favor, faça o login novamente para
           sabermos se você ainda está aí :)</p>
        <login-form class="login"/>
      </div>
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm'

export default {
  name: 'LoginModal',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 7rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  color: #666;
  text-align: center;
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 1.5rem;
    border: 1px solid #888;
    width: 30%;
    .description {
      margin-bottom: 1rem;
    }
    .login {
      margin: 0 4rem;
      padding: 1rem 2rem 0 2rem;
      border-top: 1px solid #bbb;
    }
  }
}
</style>
