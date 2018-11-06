<template>
  <div class="login-form">
    <input type="text" class="username" placeholder="username" v-model="login.username">
    <input type="password" class="password" placeholder="password" v-model="login.password">
    <button @click="submit()">Login</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['updateToken']),
    submit () {
      axios.post('http://127.0.0.1:3000/api/login', this.login)
        .then(res => {
          this.updateToken(res.data.token)
          this.$router.push('FileManager')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
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
</style>
