<template>
  <div class="LoginPage">
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username">
      <br>
      <input type="password" name="password" placeholder="Password">
      <br><br>
      <button @click="logIn">Log in</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    logIn() {
      this.$emit('LoginPage::loginResult', {loginResult: true})
    }
  }
}
</script>
