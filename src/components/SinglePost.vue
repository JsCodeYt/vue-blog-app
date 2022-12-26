<template>
    <div class="single__component">
        <img :src="PF + post.image" alt="" />
        <div class="show-update" v-if="showUpdate">
            <div class="show-update__form__container">
                <form class="show-update__form">
                    <div class="update-form__img">
                        <label htmlFor="file__input">
                            <i class="file__icon fa-solid fa-plus"></i>
                        </label>
                        <input type="file" id="file__input" @change="files = $event.target.files[0]"
                            style="display: none" name="file__input" />
                    </div>
                    <input class="form__title" type="text" @input="title = $event.target.value"
                        placeholder="enter your title !" />
                    <input class="form__desc" placeholder="enter your description"
                        @input="desc = $event.target.value" />
                    <button>Updata</button>
                </form>
            </div>
        </div>
        <div class="single-info">
            <div class="single-title">
                <span>{{ post.title }}</span>
                <div class="sigle__icons" v-if="user.username === post.username">
                    <i class="fa-regular fa-pen-to-square" @click="handleUpdate"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <span class="singe-date__titles">
                <span class="single-author">{{ post.username }}</span>
                <span>{{ new Date(post.createdAt).toDateString() }}</span>
            </span>
            <p class="single-desc">{{ post.desc }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import SidebarVue from './Sidebar.vue';
export default {
    data() {
        return {
            showUpdate: false, PF: "http://localhost:5000/upload/",
            title: this.post.title,
            desc: this.post.desc,
            files: this.post.image,
        }
    },
    components: { SidebarVue },
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        async handleUpdate() {
            this.showUpdate = true
            const res = await axios.put(`/post/${this.post._id}`, {
                username: this.user.username,
                title: this.title,
                desc: this.desc,
            })
            console.log(res.data)
        }
    },
    computed: {
        user() {
            return this.$store.state.auth.user
        },
        post() {
            return this.post
        }
    },

}
</script>
<style>
.single__component {
    flex: 9;
    display: flex;
    flex-direction: column;
    margin: 20px;
    align-items: center;
}

.singe-date__titles {
    display: flex;
}

.singe-date__titles span {
    margin-right: 300px;
    font-size: 20px;
}

.single-author {
    font-family: "Varela", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;
}

.single-author:hover {
    color: darkgoldenrod;
}

.single__component img {
    width: 1000px;
    height: 450px;
    border-radius: 10px;
    object-fit: cover;
}

.single-title {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Josefin Sans", sans-serif;
}

.single-title span {
    font-size: 20px;
    letter-spacing: 1px;
    margin: 20px 0px;
}

.sigle__icons i {
    margin: 5px 10px;
    font-size: 20px;
    cursor: pointer;
}

.single-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.single-desc {
    font-size: 20px;
    line-height: 30px;
    font-family: "Varela Round", sans-serif;
    margin-top: 20px;
}

.show-update__form {
    padding: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: "Josefin Sans", sans-serif;
}

.show-update__form input {
    height: 30px;
    width: 300px;
    border-radius: 10px;
    outline: none;
    padding: 0px 10px;
    margin: 30px 0px;
    outline: none;
    font-family: "Josefin Sans", sans-serif;
    border: none;
    font-size: 25px;
}

.form__desc {
    height: 60px;
    width: 300px;
    border: none;
    outline: none;
    font-size: 20px;
}

button {
    padding: 10px 20px;
    background-color: azure;
    border-radius: 10px;
    border: none;
    outline: none;
}
</style>