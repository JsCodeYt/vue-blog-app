<template>
    <div>
        <Header />
        <div class="home">
            <Posts v-for="post in posts" :post="post" />
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Posts from '../components/Posts.vue';
import Header from "../components/Header.vue"
import Sidebar from "../components/Sidebar.vue"


export default {
    components: { Navbar, Posts, Header, Sidebar },
    methods: {
        getPosts() {
            this.$store.dispatch("getPost")
        }
    },
    mounted() {
        this.getPosts()
    },
    computed: {
        posts() {
            return this.$store.state.posts.posts
        }
    }
}
</script>
<style>
.home {
    display: flex;
    flex-wrap: wrap;
}
</style>