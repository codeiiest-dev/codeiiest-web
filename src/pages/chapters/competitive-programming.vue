<template>
  <div>
    <div class="items-center flex flex-col">
      <carbon-timer class="text-4xl text-extrabold" />
    </div>
    <div class="relative py-8 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span
              class="block text-base text-center text-red-600 font-semibold tracking-wide uppercase dark:text-red-400"
            >
              <span class="text-green-500"> AC </span> 128/128 Tests Passed
            </span>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              Competitive Programming Chapter
            </span>
          </h1>
          <p class="text-left mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
            The main aim of this club is to create a platform for the ones who have a knack for competitive coding where they can discuss problems, algorithms, and other related stuff. Other than that, we organize tutorial sessions and online algorithmic competitions.
          </p>
        </div>
        <div
          class="text-left mt-6 prose prose-red prose-lg text-gray-500 dark:text-gray-400 mx-auto"
        >
          <ul>
            <li>
              The CP team focuses on building a strong CP culture in the institute which would help students elevate their problem-solving skills.
            </li>
            <li>
              The CP team is planning to hold sessions on various algorithms like dynamic programming, graphs, etc, and some CP contests in the near future.
            </li>
            <li>
              Some of the CP Team members have advanced to ICPC regionals and Google CodeJam Round 2 for the past few years. Dwaipayan Ray was a TCS CodeVita Finalist last year. Also, some members of the Team have been exceptional on various coding platforms. We have around 7 Candidate Masters in Codeforces and around 15 5-star rated coders on CodeChef.
            </li>
          </ul>
        </div>
        <div class="flex justify-center">
          <img src="https://user-images.githubusercontent.com/25124428/66685841-3680af80-ec9b-11e9-8c86-7044f30854b4.png" alt="competitive programming sites">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'CP | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'The Competitive Programming Chapter of CodeIIEST',
    },
  ],
})
</script>
