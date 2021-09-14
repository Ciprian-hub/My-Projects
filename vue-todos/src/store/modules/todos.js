import axios from "axios";
import Vue from "vue";

const state = {
    todos: [],
    todo: '',
}
const getters= {
    allTodos: (state) => state.todos
}
const actions = {
    async getTodos({commit}) {
        try {
            const url = 'https://jsonplaceholder.typicode.com/todos'
            const {data} = await axios.get(url)
            commit('SET_TODOS',data)
        } catch (e) {
            console.log(e)
        }
    },
    async addTodo({commit}, title) {
        try {
            const url = 'https://jsonplaceholder.typicode.com/todos'
            const {data} = await axios.post(url, {title, completed:false})
            commit('SET_NEW_TODO', data)
        } catch (e) {
            console.log(e)
        }
    },
    async deleteTodo({commit}, id) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            commit('DELETE_TODO', id)
        } catch (e) {
            console.log(e)
        }
    },
    async updateTodo({commit}, updTodo) {
        try {
            const {data} = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
            commit('SET_UPDATE_TODO', updTodo)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }
}
const mutations = {
    SET_TODOS(state, data){
        Vue.set(state, 'todos', data)
    },
    SET_NEW_TODO(state, data) {
        Vue.set(state, 'todo', data)
        state.todos.unshift(data)
    },
    DELETE_TODO(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    SET_UPDATE_TODO (state, updTodo) {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if(index !== -1) {
            state.todos.splice(index, 1, updTodo)
        }
        // Vue.set(state, 'todos', updTodo)
    },
    SEARCH_TODO (state, searchWord) {
        const todos = state.todos.filter(todo => todo.title.includes(searchWord) )
        Vue.set(state, 'todos', todos)
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}