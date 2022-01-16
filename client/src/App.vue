<script setup>
  import {onMounted, ref} from 'vue';
  import {getProducts, getAllCartItems} from './service/products';
  import Nav from './components/Nav.vue';
  import Footer from './components/Footer.vue';
  import About from './components/About.vue';
  import {useStore} from 'vuex';

  const store = useStore();
  const products = ref();
  const carts = ref();

  async function loadProducts(){
    products.value = await getProducts()
  }

  async function loadCarts(){
    carts.value = await getAllCartItems();
    carts.value.forEach(({id}) => store.commit('toggleItem', id))
  }
  
  onMounted(() => {
    loadCarts();
  })


</script>

<template>
  <Nav />
  <section class="bg-gray-100 p-8 m-8 rounded-lg">
    <router-view></router-view>
  </section>
  <About />
  <Footer />
</template>

<style>

</style>
