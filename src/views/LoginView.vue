<template>
    <div class="login">
        <form @submit.prevent class="login__form">
            <h1>Akkauntingizga kiring !</h1>
            <input type="username" placeholder="username" @input="username = $event.target.value">
            <input type="password" placeholder="username" @input="password = $event.target.value">
            <button @click="login">Login</button>
        </form>
    </div>
    <RouterLink to="/register">
        <button class="come">Register</button>
    </RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login() {
            this.$store.dispatch("login", {
                username: this.username,
                password: this.password
            })
        }
    }
}
</script>
<style scoped>
.login {
    position: relative;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
}

.login__form {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    -webkit-box-shadow: 2px 3px 14px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 2px 3px 14px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 2px 3px 14px 0px rgba(34, 60, 80, 0.2);
}

.login__form input {
    height: 40px;
    width: 300px;
    padding: 0px 10px;
    font-size: 20px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #4cc9f0;
}

.login__form button {
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