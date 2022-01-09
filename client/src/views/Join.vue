<script setup>
import {computed,onMounted, ref} from 'vue';
import {addUser} from '../service/join'

const name = ref();
const email = ref();
const password1 = ref();
const password2 = ref();


async function getUser(){
  const user = await axios("http://localhost:5500/user")
  return user.data;
}
async function joinUs(){
 //const user = await getUser();
 if(password1.value !== password2.value){
   alert('비밀번호가 다릅니다');
   return false;
 } else {
   const user = {
     name : name.value,
     email : email.value,
     password : password1.value
   }
   await addUser(user)
 }
}
</script>

<template>
<div class="container mx-auto">
  <div class="flex items-center justify-center min-h-screen bg-gray-100 ">
    <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
      <h3 class="text-2xl font-bold text-center">Join us</h3>
      <form @submit.prevent="joinUs">
        <div class="mt-4">
          <div>
            <label class="block" for="Name">Name</label>
              <input type="text" placeholder="Name" v-model="name"
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" >
          </div>
          <div class="mt-4">
            <label class="block" for="email">Email</label>
              <input type="text" placeholder="Email" v-model="email"
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
              <input type="password" placeholder="Password" v-model="password1"
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="mt-4">
            <label class="block">Confirm Password</label>
              <input type="password" placeholder="Password" v-model="password2"
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

