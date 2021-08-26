<template>
  <div class="base-navigation">
    <router-link to="/">
      <img src="https://st.depositphotos.com/1432405/1569/v/950/depositphotos_15695825-stock-illustration-movie-logo.jpg" class="logo" alt="">
    </router-link>
    <i class="fas fa-sign-out-alt" @click="logout">Logout</i>

  </div>
</template>
<script>
export default {
  name: 'baseNavigation',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="scss">
.base-navigation {
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  .logo {
    width: 100px;
    border-radius: 50%;
    padding: 12px;
  }
  .fa-sign-out-alt {
    color: rgba(255, 255, 255, 0.87);
    padding: 12px 24px;
    margin: 10px;
    &:hover {
      cursor: pointer;
    }
  }
}

</style>