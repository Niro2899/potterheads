<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>Welcome to PotterHeads</h1>
  <p>You can search here for all the character, spell, book and potions of the universe of Harrypotter</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
