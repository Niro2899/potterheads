<script setup>
import Characters from './components/Characters.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/characters">Characters</RouterLink>
    <RouterLink to="/potions">Potions</RouterLink>  
    <RouterLink to="/spells">Spells</RouterLink>
    <RouterLink to="/books">Hello World</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
