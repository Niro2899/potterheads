import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Characters from './components/Characters.vue'
import Potions from './components/Potions.vue'
import Spells from './components/Spells.vue'
import Books from './components/Books.vue'
import Potion_detail from './components/Potion_detail.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/characters', component: Characters },
  { path: '/potions', component: Potions },
  { path: '/spells', component: Spells},
  { path: '/books', component: Books},
  { path: '/potions/:id', component: Potion_detail},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
