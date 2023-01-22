<script setup>
import HeaderVue from '../components/Header.vue'
import MovieVue from '../components/Movie.vue'

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