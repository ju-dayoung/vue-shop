import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Product from './views/Product.vue'
import Join from './views/Join.vue'
import Login from './views/Login.vue'
import Cart from './views/Cart.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product', component: Product },
  { path: '/join', component: Join },
  { path: '/login', component: Login },
  { path: '/Cart', component: Cart },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const store = createStore({
  state () {
    return {
      cart: [],
    }
  },
  mutations: {
    toggleItem (state, id) {
      const index = state.cart.indexOf(id);
      // 이미 카트에 있다! 빼자!
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      // 카트에 없다! 넣자!
      else {
        state.cart.push(id);
      }
    },
  }
})
createApp(App).use(router).use(store).mount('#app')

