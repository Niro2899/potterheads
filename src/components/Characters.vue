
<script setup>

import axios from 'axios';
import { ref } from 'vue';

var latestResponse = null;
const characters = ref();
var latestLinks = null;

// ------------ fonction pour chercher dans l'API ----------------- //

function fetchAPI(url) {
  axios.get(url)
  .then(response => {
    // Handle the response data here
    latestResponse = response.data;
    console.log(latestResponse);
    characters.value = latestResponse.data;
    latestLinks = latestResponse.links;
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });
}

// ------------ vas chercher les données de l'api au lancement de la page ----------------- //

{
  let url = `https://api.potterdb.com/v1/characters`;
  fetchAPI(url);
}


// ------------ fonction pour chercher par nom ----------------- //

function onInput(e) {
  fetchAPI(`https://api.potterdb.com/v1/characters?filter[name_cont]=${e.target.value}`);
  console.log(e.target.value);
}


// ------------ fonction pour les boutons first, prev, next, last ----------------- //

  function onInput_first() {
    // appel api avec axios avec  : responce.links.first
    console.log('first');
    fetchAPI(latestLinks.first);
  }

  function onInput_prev() {
    // appel api avec axios avec  : responce.links.prev
    console.log('prev');
    fetchAPI(latestLinks.prev);
  }

  function onInput_next() {
    // appel api avec axios avec  : responce.links.next
    console.log('next');
    fetchAPI(latestLinks.next);
  }

  function onInput_last() {
    // appel api avec axios avec  : responce.links.last
    console.log('last');
    fetchAPI(latestLinks.last);
  }

</script>



<template>
  <h3>Characters:</h3>
  <input @input="onInput" placeholder="Chercher par nom">
  <div class="character-list">
    <div v-for="character in characters" :key="character.id" class="character-card">
      {{ character.attributes.name }}
      <button @click="router.push(character.links.self)">En savoir plus</button>
    </div>
  </div>

  <div>
    <button @click="onInput_first">First</button>
    <button @click="onInput_prev">Previous</button>
    <button @click="onInput_next">Next</button>
    <button @click="onInput_last">Last</button>
  </div>
</template>

<style scoped>
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.character-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

</style>
