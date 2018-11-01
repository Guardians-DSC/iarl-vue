<template>
  <div class="login">
    <div class="login-box">
      <input type="text" class="username" placeholder="username">
      <input type="password" class="password" placeholder="password">
      <button>Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eeeeee;
}
.login-box {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: 0 0 2rem #c2c2c2;
  input {
    margin: .5rem;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 1px solid #b1b1b1;
  }
  button {
    margin-top: 1rem;
    padding: .5rem;
    background: #33c7c7;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
  }
}

</style>
