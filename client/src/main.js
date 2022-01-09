import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Product from './views/Product.vue'
import Join from './views/Join.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product', component: Product },
  { path: '/join', component: Join },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const store = createStore({
  state(){
    return{
      cart: [],
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

