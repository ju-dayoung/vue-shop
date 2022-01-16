<script setup>
import {computed,onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';

import axios from 'axios';


const email = ref()
const password = ref()
const router = useRouter()

async function logIn(){
  const userEmail = await axios.get(`http://localhost:5500/user/?email=${email.value}`);
  if(userEmail.data.length === 0){
    alert('아이디가 없음');
    return
  } else if(userEmail.data[0].password !== password.value){
    alert('로그인 실패')
    return
  }

  alert('로그인 완료');
  router.push('/products');
}
</script>

<template>
<div class="container mx-auto">
  <div class="flex items-center justify-center min-h-screen bg-gray-100 ">
    <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
      <h3 class="text-2xl font-bold text-center">Login</h3>
      <form @submit.prevent="logIn">
        <div class="mt-4">
          <div class="mt-4">
            <label class="block" for="email">Email</label>
              <input type="text" placeholder="Email" v-model="email" required
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
              <input type="password" placeholder="Password" v-model="password" required
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <span class="text-xs text-red">Password must be same!</span>
          <div class="flex">
            <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">Create Account</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

