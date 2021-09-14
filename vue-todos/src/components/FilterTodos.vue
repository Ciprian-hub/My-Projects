<template>
  <input
      type="text"
      @input="handleSearch"
      placeholder="Search..."
      v-model="searchWord"  >

</template>

<script>
export default {
  name: 'FilterTodos',
  data() {
    return {
      searchWord: ''
    }
  },
 methods: {
    handleSearch () {
      this.$store.commit('SEARCH_TODO', this.searchWord)
    }
 }
}
</script>