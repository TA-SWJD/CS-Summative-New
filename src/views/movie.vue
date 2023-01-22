<script setup>
import HeaderVue from '../components/Header.vue'
import MovieVue from '../components/movies.vue'

</script>

<template>
    <div class="Homepage">
        <HeaderVue v-bind:Login="true" />
        <Suspense>
            <MovieVue />
        </Suspense>
    </div>
</template>

<style scoped>

</style>