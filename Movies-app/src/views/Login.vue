<template>
  <div class="log-form">
    <form @submit.prevent="handleLogin()" class="form-container">
      <h2>Log-In</h2>
      <label for="email">
        Email: <br>
        <input id="email"
               v-model="user.username"
               type="text" placeholder="email address" />
      </label>
      <label for="password">
        Password: <br>
        <input id="password"
               v-model="user.password"
               type="text" placeholder="password" />
      </label>
      <button>LOGIN</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {},
    }
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('login', this.user)
    }
  },
}
</script>
<style lang="scss">
.log-form {
  height: 100vh;
  .form-container {
    color: white;
    letter-spacing: 3px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 400px;
    input {
      padding: 6px 12px;
      margin: 10px;
      border-radius: 1em;
    }
    label {
      font-size: 24px;
      font-weight: 200;
    }
    button {
      padding: 6px 12px;
      margin: 10px;
      background-color: #417ed7;
      border: none;
      font-size: 18px;
      border-radius: 1em;
    }
  }
}
</style>