import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Product from './views/Product.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product', component: Product },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const store = createStore({
  state(){
    return{
      cart: ['2', '3'],
    }
  },
  mutations: {
    toggleItem (state, id){
      const index = state.cart.indexOf(id);
      //이미 카트에 있다! 빼자!
      if(index > -1) {
        state.cart.splice(index, 1)
      } else {
        state.cart.push(id);
      }
    }
  }
})
createApp(App).use(router).use(store).mount('#app')

