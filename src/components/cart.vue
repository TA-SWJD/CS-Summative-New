<script setup>
import { createApp } from "vue";
import { useCart, useStore } from "../store/index.js"

const cart = useCart();
const store = useStore();
</script>

<template>
    <div class="page">
        <div class="purchased" v-for="purchased in cart.purchase">
            <div class="content">
                {{ store.movies.filter(x => x.id == purchased)[0].title }}
                <button class="remove" @click="cart.removing(purchased)">Remove</button>
                <img :src="'https://image.tmdb.org/t/p/w500' + store.movies.filter(x => x.id == purchased)[0].poster"
                    class="poster">
            </div>
        </div>
    </div>
    <button class="p-button" @click="cart.clear()">Purchase</button>
    <img src="../assets/Footer.avif" class="FooterIMG">

</template>

<style scoped>
.page {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.content {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 12px;
    font-weight: bold;
    padding-top: 10px;
}

.poster {
    width: 100%;
    color: black;
    float: left;
}

.p-button {
    float: right;
    font-size: 25px;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    color: white;
    background-color: black;
}

.p-button:hover {
    color: black;
    background-color: white;
}

p {
    float: inline-start;
    color: white;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: medium;
    font-weight: bold;
}

img {
    height: 500px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 5px;
    font-size: 30px;
    text-align: center;
}

.remove {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
}

.remove:hover {
    color: white;
    background-color: black;
}

.FooterIMG {
    padding-top: 20px;
    height: auto;
    max-width: 100%;
}
</style>