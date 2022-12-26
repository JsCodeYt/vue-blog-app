<template>
    <div className="sidebar">
        <div className="sidebar__items">
            <div className="sidebar__item">
                <i class="fa-solid fa-music"></i>
                <span>Music</span>
            </div>
            <div className="sidebar__item">
                <i class="fa-solid fa-medal"></i>
                <span>Sport</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.sidebar {
    flex: 3;
}

.sidebar__items {
    display: flex;
    flex-direction: column;
}

.sidebar__item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0px;
    padding: 10px 5px;
    cursor: pointer;
    border-radius: 5px;
}

.sidebar__item span {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
}

.sidebar__item i {
    font-size: 20px;
}

.sidebar__item:hover {
    background-color: #efefef;
}
</style>