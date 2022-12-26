<template>
    <div class="write">
        <div class="write__form-container">
            <form class="write__form" @submit.prevent>
                <label for="file__input">
                    <i class="file__icon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="file__input" class="file__input" @change="inputHandler" style="display:none" />
                <input type="text" placeholder="enter post title !" class="title__input"
                    @input="title = $event.target.value" />
                <div class="write__desc">
                    <textarea placeholder="enter post description" @input="desc = $event.target.value"></textarea>
                </div>
                <button type="submit" @click="publishPost">
                    Publish
                </button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from '../config/axios'

export default {
    data() {
        return {
            files: null,
            title: "",
            desc: "",
        }
    },
    methods: {
        inputHandler(event) {
            this.files = event.target.files[0]
            console.log(this.files)
        },
        async publishPost(event) {
            if (this.files) {
                const data = new FormData()
                data.append("file", this.files)
                const filename = Date.now() + this.files.name
                data.append("name", filename)
                try {
                    await axios.post("/upload", { data })
                        .then(res => { alert(res.data) })
                        .catch(err => {
                            alert(err)
                        })
                    await axios.post("/post", {
                        title: this.title,
                        username: this.author.username,
                        desc: this.desc,
                        image: filename
                    }).then(res => {
                        console.log(res.data)
                    }).catch(err => { alert(err.message) })
                } catch (err) {
                    alert(err.message)
                }
            } else {
                alert("iltimos rasm kriting !")
            }
        },
    },
    computed: {
        author() {
            return this.$store.state.auth.user
        }
    }
}
</script>
<style>
.write {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.write button {
    padding: 10px;
    background-color: burlywood;
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 40px;
}

.file__icon {
    font-size: 30px;
    color: #333;
}

.write__img {
    width: 700px;
    height: 300px;
    border-radius: 10px;
}

.title__input {
    margin-left: 20px;
    width: 400px;
    height: 30px;
    border: none;
    outline: none;
    font-size: 30px;
}

.write__desc textarea {
    width: 400px;
    height: 100px;
    border: none;
    outline: none;
    margin-top: 30px;
    font-size: 30px;
}
</style>