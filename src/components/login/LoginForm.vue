<template>
  <form class="login-form" @submit.prevent="submit()">
    <input ref="username" type="text" class="username" placeholder="username" v-model="user.username">
    <input type="password" class="password" placeholder="password" v-model="user.password">
    <div class="error" v-if="error">* {{error}}</div>
    <button type="submit" :class="{ disabled: submitDisabled }" :disabled="submitDisabled">Login</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      error: '',
      user: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    submitDisabled () {
      return !this.user.username || !this.user.password
    }
  },
  methods: {
    ...mapActions(['login']),
    submit () {
      this.login(this.user)
        .then(() => this.$emit('successfulLogin'))
        .catch(err => { this.error = err })
    }
  },
  mounted () {
    this.$refs.username.focus()
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
  &[type=password] {
    margin-bottom: 1rem;
  }
}
button {
  margin-top: .5rem;
  padding: 0.5rem;
  background: #33c7c7;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
}
.disabled {
  background-color: #ccc;
  color: #999;
}
.error {
  color: #d63939;
  font-size: 12px;
  font-weight: bold;
  margin: 0 .5rem;
}
</style>
