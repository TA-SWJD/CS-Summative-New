<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const error = ref(false);
const username = ref("");
const password = ref("");

const login = () => {
    if (username.value === "tmdb" && password.value === "movies") {
        router.push("/Movie");
    } else {
        error.value = true;
    }
}
</script>

<template>
    <div class="homepage">
        <img src="https://cdn-images-1.medium.com/max/1200/1*ty4NvNrGg4ReETxqU2N3Og.png" width="140" height="100">
        <p>Welcome to Netflix <br> Unlimited movies, TV shows, and more.</p>
        <form @submit.prevent="login()">
            <input type="text" placeholder="Gmail" />
            <input type="text" placeholder="Username" v-model="username" />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="submit" value="Login" id="button" />
        </form>
        <div class="error" v-if="error">
            Invalid Username or Password
        </div>
    </div>
</template>

<style scoped>
.logo {
    align-items: center;
    justify-content: center;
}

.homepage {
    color: white;
    background-image: url(../assets/Netflix.webp);
    background-size: auto;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 2.5rem;
}

.homepage>p {
    text-align: center;
}

.homepage>.error {
    border-radius: 20px;
    color: red;
    font-size: 20px;
    margin-top: 20px;
    font-family: monospace;
    background-color: black;
}

.homepage>form>input {
    padding: 5px;
    border-radius: 20px;
    width: 200px;
    height: 25px;
}

#button {
    width: 215px;
    height: 30px;
    margin-top: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: white;
    color: black;
}

#button:hover {
    background-color: black;
    color: white;
}

form {
    display: flex;
    flex-direction: column;
}
</style>