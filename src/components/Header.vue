<template>
    <div className="header">
        <div className="header-titles">
            <span className="header-titlesm">React & Node</span>
            <span className="header-titlelg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="header-img" />
    </div>
</template>
<script>
export default {

}
</script>
<style>
.header {
    margin-top: 80px;
    font-family: "Lora", serif;
}

.header img {
    width: 100%;
    height: 450px;
    object-fit: cover;
}

.header-titles {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-titlesm {
    position: absolute;
    top: 18%;
    font-size: 20px;
}

.header-titlelg {
    position: absolute;
    top: 20%;
    font-size: 100px;
}
</style>