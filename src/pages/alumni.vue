<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { alumniMembers } from '~/logic'
useHead({
  // Can be static or computed
  title: 'Alumni | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'Our Seniors, Vidhayak, Senpai',
    },
  ],
})
</script>

<template>
 <div>
    <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Seniors, Vidhayak, Senpai</h2>
          <p class="text-xl text-gray-500">Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare diam in.</p>
        </div>
        <ul class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6" x-max="1">      
            <li v-for="(alumni, index) in alumniMembers" :key="index" >
              <div class="space-y-4">
                <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="alumni.avatar" alt="">
                <div class="space-y-2">
                  <div class="text-xs font-medium lg:text-sm">
                    <h3>{{ alumni.name }}</h3>
                    <p class="dark:text-red-400 text-red-700">{{ alumni.desc }}</p>
                  </div>
                </div>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>
