<template>
  <div class="home">
    <h1>Todos:</h1>
    <add-todo/>
<!--    <filter-todos/>-->
    <todos/>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import FilterTodos from "../components/FilterTodos";

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>
