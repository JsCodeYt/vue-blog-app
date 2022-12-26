import axios from "../../config/axios"

const posts = {
    state() {
        return {
            posts: [],
            post: {}
        }
    },
    mutations: {
        postSuccess(state, payload) {
            state.posts = payload
        },
        singleSuccess(state, payload) {
            state.post = { ...payload }
        }
    },
    actions: {
        async getPost({ commit }) {
            try {
                const response = await axios.get("/post")
                console.log(response)
                commit('postSuccess', response.data)
            } catch (error) {
                alert(error.message)
            }
        },
        async getOne({ commit }, id) {
            try {
                const response = await axios.get(`/post/${id}`)
                console.log(response.data)
                commit("singleSuccess", response.data)
            } catch (error) {
                alert(error.message)
            }
        }
    }
}

export default posts