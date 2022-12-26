<template>
    <div class="posts">
        <PostVue :post="post"/>
    </div>
</template>
<script>
import PostVue from './Post.vue';
export default {
    components: {
        PostVue
    },
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>
<style>
.posts {
    display: flex;
    flex-wrap: wrap;
}
</style>