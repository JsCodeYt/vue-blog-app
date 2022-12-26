<template>
    <div class="top">
        <div class="top-left">
            <i class="left__icon fa-brands fa-square-instagram"></i>
            <i class="left__icon fa-brands fa-square-youtube"></i>
            <i class="left__icon fa-brands fa-square-twitter"></i>
            <i class="left__icon fa-brands fa-square-facebook"></i>
        </div>
        <div class="top-center">
            <ul class="top-center__items">
                <a href="/" class="top-center__item">
                    Home
                </a>
                <a href="/" class="top-center__item">
                    About
                </a>
                <a href="/" class="top-center__item">
                    Contact
                </a>
                <a href="/write" class="top-center__item">
                    Write
                </a>
                <a href="/" class="top-center__item" onClick={handleOut}>
                    LogOut
                </a>
            </ul>
        </div>
        <div class="top-rigth">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-bars menu-icon"></i>
        </div>
    </div>
</template>
<script>
import { RouterLink } from "vue-router"
export default {

}
</script>
<style>
.top {
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    display: flex;
    align-items: center;
    font-family: "Josefin Sans", sans-serif;
}

.top-left,
.top-rigth {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top-center {
    flex: 6;
    display: flex;
    justify-content: center;
}

.left__icon {
    margin-left: 10px;
    font-size: 20px;
    color: #444;
    cursor: pointer;
}

.top-center__items {
    list-style: none;
    text-transform: uppercase;
    display: flex;
}

.top-center__item {
    cursor: pointer;
    margin-right: 10px;
    font-size: 18px;
}

.top-rigth img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
}

.top-rigth i {
    margin-left: 10px;
    font-size: 20px;
    color: #666;
    cursor: pointer;
}

.menu-icon {
    display: none;
}


@media (max-width: 900px) {
    .left {
        display: flex;
    }

    .left__icon {
        font-size: 40px;
    }

    .top-center {
        display: none;
    }

    .top-rigth {
        margin-left: 10px;
    }

    .menu-icon {
        display: inline-block;
    }

    .list-navbar {
        background-color: #242424;
        padding: 10px;
        position: absolute;
        top: 5px;
        z-index: 1000;
    }

    .list__items {
        list-style: none;
        display: flex;
        flex-direction: column;
    }

    .list__item {
        padding: 10px;
        margin: 10px 0px;
        color: white;
    }

    .list__item:hover {
        background-color: #efefef;
        border-radius: 10px;
    }
}
</style>