import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { api } from './api'
import * as auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: {},
    movie: {
      image: {},
      genres: []
    },
    /*genre: []*/

  },
  mutations: {
    SET_MOVIES (state, movies){
      Vue.set(state, 'movies', movies)
    },
    SET_MOVIE (state, movie){
      Vue.set(state, 'movie', movie)
    },
    SET_MOVIES_BY_SEARCH (state, movies) {
      Vue.set(state, 'movies', movies)
    },
  },
  actions: {
    async getMovies ({commit}) {
      try {
        const {data} = await axios.get(api.movies)
        commit('SET_MOVIES', data)
      } catch (err) {
        console.log(err)
      }
    },
    async getMovie ({commit}, id){
      try {
        const url = `/api/movies/${id}`
        const {data} = await axios.get (url)
        commit ('SET_MOVIE', data)
      }catch (e) {
        console.log(e)
      }
    },
    async handle_search( {commit}, searchString) {
      try {
        const url = `/api/movies/search`
        const {data} = await axios.post(url, {
          searchQuery : searchString
        })
        commit('SET_MOVIES_BY_SEARCH', data)
      } catch (e) {
        console.log(e)
      }
    },
  },
  modules: {
    auth
  }
})
