<template>
  <div>
    <div class="items-center flex flex-col">
      <la-laptop-medical class="text-4xl text-extrabold" />
    </div>
    <div class="relative py-8 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span
              class="block text-base text-center text-red-600 font-semibold tracking-wide uppercase dark:text-red-400"
            >
              The Information Security Chapter
            </span>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              d4rks0c1ety
            </span>
          </h1>
          <p class="text-left mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
            This chapter wants everyone to be aware of the very basic things that a developer should know, which can help them build resilient software. Capture the flag (CTF) events help to focus on a large variety of topics that everyone should be peripherally aware of.
          </p>
          <p class="text-left mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
            It's not always cracking passwords or finding bugs in a system, you might need to git reflog and recover secrets or reconstruct broken images from its remains. OSINT is another interesting topic where all the clues you have are available publicly and you need to connect the dots together to find out the solution.
          </p>
        </div>
        <div
          class="text-left mt-6 prose prose-red prose-lg text-gray-500 dark:text-gray-400 mx-auto"
        >
          <ul>
            <li>Sessions will be held introducing everyone to the basics of CTFs, with resources provided for all directions a student might want to explore</li>
            <li>One of our teams was Top 100 in India in 2020, having participated in well over 20 CTFs</li>
          </ul>
        </div>
        <div class="flex justify-center">
          <img src="https://wallpapercave.com/wp/wp7794565.jpg" alt="infosec" width="600">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'InfoSec | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'The InfoSec chapter of CodeIIEST',
    },
  ],
})
</script>
