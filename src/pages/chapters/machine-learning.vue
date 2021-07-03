<template>
  <div>
    <div class="items-center flex flex-col">
      <la-robot class="text-4xl text-extrabold" />
    </div>
    <div class="relative py-8 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span
              class="block text-base text-center text-red-600 font-semibold tracking-wide uppercase dark:text-red-400"
            >
              TRAINING ROBOT OVERLORDS
            </span>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              The Machine Learning Chapter
            </span>
          </h1>
          <p class="text-left mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem error rerum neque libero ipsa veniam in dolore illum beatae. Autem doloribus quo illum earum nisi libero non animi voluptatem.
          </p>
          <p class="text-left mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, eos inventore quaerat tempora cupiditate voluptatem! Deleniti est dolorem nesciunt pariatur aut, ad, possimus temporibus, officiis ipsum consectetur unde soluta? Fuga!
          </p>
        </div>
        <div
          class="text-left mt-6 prose prose-red prose-lg text-gray-500 dark:text-gray-400 mx-auto"
        >
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio eligendi, voluptates culpa tempore dicta accusantium cumque, voluptate quisquam nesciunt labore! Optio, impedit nam nobis nostrum cumque deleniti explicabo eos.</li>
          </ul>
        </div>
        <ul class="flex flex-wrap flex-row justify-center items-center">
          <li v-for="(item) in infosecImages" :key="item.id">
            <!-- <img
              height="150"
              width="150"
              :src="item.src"
              :alt="item.alt"
              class="mx-2"
            /> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { infosecImages } from '~/logic'
useHead({
  title: 'ML | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'The Machine Learning chapter of CodeIIEST',
    },
  ],
})
</script>
