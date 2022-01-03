<script setup>
  import {ref} from 'vue';
  import {getProducts} from './service/products';
  import Nav from './components/Nav.vue';
  import Footer from './components/Footer.vue';
  import About from './components/About.vue';
  let products = ref();

  async function load(){
    products.value = await getProducts();
  }
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
