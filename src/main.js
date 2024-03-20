import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Characters from './components/Characters.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/characters', component: Characters },
  { path: '/potions', component: Potions },
  { path: '/spells', component: Spells},
  { path: '/books', component: Books},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
