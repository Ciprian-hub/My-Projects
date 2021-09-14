<template>
  <div>
    <div class="todos">
      <div
          :class="{'is-complete':todo.completed}"
          @dblclick="handleDbClick(todo)"
          class="todo"
          v-for="todo in allTodos"
          :key="todo.id">
         <p>{{todo.title.toUpperCase()}}</p>
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['getTodos', 'deleteTodo', 'updateTodo']),
    handleDbClick(todo) {
      console.log('ss ')
      const  updTodo = {
        id:todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updTodo)
    }
  },

  computed: mapGetters(['allTodos']),

  created() {
    this.getTodos()
  }
}
</script>

<style scss>
.todos {
  font-family: "Roboto", Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  width: 500px;
}
.todo {
  position: relative;
  border-radius: 8px ;
  text-align: center;
  padding: 1rem;
  margin: 16px 8px;
  cursor: pointer;
  height:100px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.46);
}
i {
  bottom: 15px;
  right: 8px;
  cursor:pointer;
  color: rgba(163, 0, 0, 0.63);
}
.is-complete {
  background-color: #5771fd;
}
.todos div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
}
p {
  font-weight: normal;
  font-size: 1.2rem;
}
</style>