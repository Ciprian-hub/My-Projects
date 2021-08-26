import {api} from "../api";
import axios from "axios";
import Vue from 'vue'
import router from "../../router";

export const state = {
    user: {}
}
export const actions = {
    async login ({commit}, user) {
        try {
            const {data} = await axios.post(api.login, user)
            commit('SET_USER', data)
            await router.push('/')
        }
        catch (err) {
            console.log(err.response)
        }
    },
    async logout ({commit}) {
        try {
            await axios.delete(api.logout)
            commit('SET_USER', {})
            await router.push('/login')
        }
        catch (err) {
            console.log(err.response)
        }
    },
    async check_login ({commit}, {next}) {
        try {
            const {data} = await axios.get(api.login)
            console.log(data)
            if (data.name)  {
                next()
                commit('SET_USER', data)
            } else {
                next("/login")
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}
export const mutations = {
    SET_USER (state, user) {
        Vue.set(state, 'user', user)
    }
}
