import { createStore } from "vuex"
import auth from "./module/auth"
import posts from "./module/posts"

const store = createStore({
    modules: {
        auth,
        posts 
    }
})

export default store