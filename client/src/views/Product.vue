<script setup lang="ts">

import {useRoute, useRouter} from 'vue-router';
import {ref} from 'vue';
import {getProduct} from '../service/products';

const route = useRoute()
const router = useRouter()
const id = route.query.id;

const product = ref()
async function loadProduct() {
  product.value = await getProduct(id)
}
loadProduct()

</script>

<template>
  <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    <div>
      <button class="bg-gray-200 px-4 py-2 rounded" @click="router.back">뒤로가기</button>
    </div>
      <ul>
        <li>ID: {{product.id}}</li>
        <li>NAME: {{product.name}}</li>
        <li>price: {{product.price}}</li>
        <li><img :src="product.imgUrl"></li>
      </ul>
  </div>

</template>

<style scoped>

</style>
