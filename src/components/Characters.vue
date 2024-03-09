
<script setup>

import axios from 'axios';
import { ref } from 'vue';

const characters = ref();


// ------------ vas chercher les données de l'api au lancement de la page ----------------- //

axios.get('https://api.potterdb.com/v1/characters')
  .then(response => {
    // Handle the response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });


// ------------ fonction pour chercher par nom ----------------- //

function onInput(e) {
    // appel api avec axios avec  : GET https://api.potterdb.com/v1/characters?filter[name_cont]={e.target.value}
const url = `https://api.potterdb.com/v1/characters?filter[name_cont]=${e.target.value}`;
  axios.get(url)
  .then(response => {
    // Handle the response data here
    console.log(response.data);
    characters.value = response.data;
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });


// ------------ fonction pour les boutons first, prev, next, last ----------------- //

  function onInput_first() {
    // appel api avec axios avec  : responce.links.first
    console.log('first');
  }

  function onInput_prev() {
    // appel api avec axios avec  : responce.links.prev
    console.log('prev');
  }

  function onInput_next() {
    // appel api avec axios avec  : responce.links.next
    console.log('next');
  }

  function onInput_last() {
    // appel api avec axios avec  : responce.links.last
    console.log('last');
  }


}

</script>



<template>
    <h3>Characters : </h3>
    <input @input="onInput" placeholder="Chercher par nom">
    <ul>
        <li v-for="character in characters" :key="character.id">
        {{ character.id }}
        </li>
    </ul>

    <div>
      <button @click="onInput_first">First</button>
      <button @click="onInput_prev">Previous</button>
      <button @click="onInput_next">Next</button>
      <button @click="onInput_last">Last</button>
    </div>

</template>



<style scoped>

</style>
