<template>
    <div class="single">
        <SinglePostView :post="post" />
        <Sidebar />
    </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import SinglePostView from '../components/SinglePost.vue';

export default {
    components: { SinglePostView, Sidebar },
    methods: {
        getSinglePost() {
            this.$store.dispatch("getOne", this.$route.params.id)
        }
    },
    mounted() {
        this.getSinglePost()
    },
    computed: {
        post() {
            return this.$store.state.posts.post
        }
    }
}
</script>
<style>
.single {
    display: flex;
}
</style>