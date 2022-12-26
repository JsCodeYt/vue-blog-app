import axios from "../../config/axios"

const auth = {
    state() {
        return {
            user: JSON.parse(localStorage.getItem("user")) || {},
            isLoading: false,
            error: false,
        }
    },
    mutations: {
        registerStart(state) {
            state.isLoading = true
        },
        registerSuccess(state, payload) {
            setTimeout(() => {
                state.isLoading = false
            }, 1000)
            state.user = payload
        },
        registerFailure(state) {
            state.error = true
        },
        loginStart(state) {
            state.isLoading = true
        },
        loginSuccess(state, payload) {
            setTimeout(() => {
                state.isLoading = false
            }, 1000)
            state.user = payload
        },
        loginFailure(state) {
            state.error = true
        }
    },
    actions: {
        async register({ commit }, user) {
            commit("registerStart")
            try {
                const res = await axios.post("/auth/register", { ...user })
                commit("registerSuccess", res.data)
                console.log(res.data)
                localStorage.setItem("user", JSON.stringify(res.data))
                window.location.replace("/")
            } catch (error) {
                commit("registerFailure")
            }
        },
        async login({ commit }, user) {
            commit("loginStart")
            try {
                const res = await axios.post("/auth/login", { ...user })
                console.log(res)
                localStorage.setItem("user", JSON.stringify(res.data))
                commit("loginSuccess", res.data)
            } catch (error) {
                commit("loginFailure")
            }
        }
    }
}


export default auth