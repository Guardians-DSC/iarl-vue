<template>
  <div class="login">
    <div class="login-box">
      <input type="text" class="username" placeholder="username" v-model="username">
      <input type="password" class="password" placeholder="password" v-model="password">
      <button @click="submit()">Login</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      const res = await axios.post('http://127.0.0.1:3000/api/login', {
        username: this.username,
        password: this.password
      })
      console.log(res.data.token)
    }
  }
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
  padding: 2rem;
  box-shadow: 0 0 2rem #c2c2c2;
  *:focus {
    outline: 1px solid #33c7c7;
  }
  input {
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #b1b1b1;
  }
  button {
    margin-top: 1rem;
    padding: 0.5rem;
    background: #33c7c7;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
