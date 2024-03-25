
<script setup>

import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

var latestResponse = null;
const characters = ref();
var latestLinks = null;
const route = useRoute();

// ------------ fonction pour chercher dans l'API ----------------- //

function fetchAPI(url) {
  axios.get(url)
  .then(response => {
    // Handle the response data here
    latestResponse = response.data;
    console.log(latestResponse);
    characters.value = latestResponse.data;

    if (characters.value.attributes.characteristics == null) {
    characters.value.attributes.characteristics = "Unknown";
    }
    if (characters.value.attributes.effect == null) {
      characters.value.attributes.effect = "Unknown";
    }
    if (characters.value.attributes.inventors == null) {
      characters.value.attributes.inventors = "Unknown";
    }
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });
}

// ------------ vas chercher les données de l'api au lancement de la page ----------------- //

{
  let url = `https://api.potterdb.com/v1/potions/` + route.params.id;
  console.log(route.params.id);
  fetchAPI(url);
}



  function  getWikiUrl(character) {
    return character.attributes.wiki;
  }




</script>



<template>
    <h3>Detail : </h3>
    <div class="character-list">
      <div class="character-card">
        <img :src="characters.attributes.image" alt="image of the potions if exist">
      </div>
      <div class="character-card">
        <h2>{{ characters.attributes.name }}</h2>
        <br>
        <p><strong>Characteristics : </strong>{{ characters.attributes.characteristics }}</p>
        <p><strong>Effect : </strong>{{ characters.attributes.effect }}</p>
        <p><strong>Inventors : </strong>{{ characters.attributes.inventors }}</p>
        <a target="_blank" :href="getWikiUrl(characters)"><button>En savoir plus</button></a>
      </div>
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
  width: 400px;
  height: 600px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #7e7e7e;
}

.character-card p {
  font-size: 17px;
}

.character-card img {
  object-fit:contain;
  height: 90%;
}

</style>
