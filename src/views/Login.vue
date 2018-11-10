<template>
  <div class="login">
    <div class="login-box">
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import { mapState } from 'vuex'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  computed: mapState(['validToken']),
  watch: {
    validToken (value) {
      if (value) {
        this.$router.push('FileManager')
      }
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
  background: #eee;
}
.login-box {
  background: #fff;
  padding: 2rem;
  box-shadow: 0 0 2rem #c2c2c2;
  *:focus {
    outline: 1px solid #33c7c7;
  }
}
</style>
