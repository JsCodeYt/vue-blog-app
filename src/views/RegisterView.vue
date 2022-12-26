<template>
    <div class="register">
        <form @submit.prevent class="register__form">
            <h1>Ro'yhatdan o'ting !</h1>
            <input type="username" placeholder="username" @input="username = $event.target.value">
            <input type="email" placeholder="username" @input="email = $event.target.value">
            <input type="password" placeholder="username" @input="password = $event.target.value">
            <button @click="register">Register</button>
        </form>
    </div>
    <RouterLink to="/login">
        <button class="come">Login</button>
    </RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            username: "",
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            try {
                this.$store.dispatch("register", {
                    username: this.username,
                    email: this.email,
                    password: this.password
                })
            } catch (error) {
                alert(error.message)
            }
        }
    }
}
</script>
<style scoped>
.register {
    position: relative;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
}

.register__form {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    -webkit-box-shadow: 2px 3px 14px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 2px 3px 14px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 2px 3px 14px 0px rgba(34, 60, 80, 0.2);
}

.register__form input {
    height: 40px;
    width: 300px;
    padding: 0px 10px;
    font-size: 20px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #4cc9f0;
}

.register__form button {
    padding: 10px 30px;
    background-color: #4cc9f0;
    font-size: 20px;
    cursor: pointer;
}

.come {
    position: absolute;
    top: 50px;
    right: 30px;
    cursor: pointer;
    padding: 10px 40px;
    background-color: #a2d2ff;
    font-size: 20px;
}
</style>