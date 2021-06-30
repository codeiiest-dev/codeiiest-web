<template>
  <div class="text-center">
    <h1 class="dark:text-gray-100 text-gray-900 text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
      <span class="block xl:inline">Code</span>
      <!-- space -->
      <span class="block text-red-600 xl:inline">IIEST</span>
    </h1>
    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      The Coding Club of IIEST, Shibpur.
      <br><br>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, corrupti beatae! Odio facilis consectetur veniam recusandae dolor blanditiis aut, sint tempora excepturi quod qui maiores perferendis alias laboriosam eum voluptate?
    </p>
    <div class="mt-10">
      <h1 class="dark:text-gray-100 text-gray-900 text-3xl tracking-tight font-bold">
        Chapters
      </h1>
      <div class="flex flex-wrap justify-center">
        <div v-for="(chapter, index) in chapters" :key="index" class="w-full max-w-sm px-4 py-3 mx-5 my-3 bg-white rounded-md shadow-md dark:bg-gray-800">
          <div>
            <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
              {{ chapter.name }}
            </h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.
            </p>
          </div>

          <div>
            <div class="flex items-center mt-2 text-gray-700 dark:text-gray-200">
              <a :href="chapter.route" class="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isDark } from '~/logic'
const chapters: Array<{name: String; route: String}> = [
  { name: 'Development', route: '/chapters/development' },
  { name: 'Competitive Programming', route: '/chapters/competitive-programming' },
  { name: 'Information Security', route: '/chapters/infosec' },
  { name: 'Machine Learning', route: '/chapters/machine-learning' },
  { name: 'CodeIIEST Girls', route: '/chapters/codeiiest-girls' },
]
</script>

<route lang="yaml">
meta:
  layout: default
</route>
