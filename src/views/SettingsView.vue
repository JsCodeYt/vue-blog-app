<template>
    <div className="set">
        <span className="set-title">Upload your accaunt !</span>
        <div className="set-pp">
            <form className="set-pp__form">
                <label for="file__input">
                    <i className="file__icon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="file__input" style="display: none;" />
                <input type="text" placeholder="username" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">
                    Update
                </button>
            </form>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.set {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
}

.set button {
    padding: 10px 0px;
    background-color: aquamarine;
    border: none;
    outline: none;
    border-radius: 10px;
}

.set-title {
    font-size: 30px;
    color: tomato;
}

.set-pp {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 100px;
}

.set-pp img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 20px;
}

.set-pp__form {
    display: flex;
    flex-direction: column;
    margin: 20px;
    gap: 1rem;
}

.set-pp__form input {
    height: 30px;
    width: 200px;
    border-radius: 10px;
    outline: none;
    font-family: "Varela Round", sans-serif;
    padding: 0px 10px;
    font-size: 20px;
}
</style>