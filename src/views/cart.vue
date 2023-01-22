<script setup>
import HeaderVue from '../components/Header.vue';
import cartVue from '../components/cart.vue';
</script>

<template>
    <div>
        <HeaderVue v-bind:Login="true" />
        <cartVue />
    </div>
</template>

<style scoped>

</style>