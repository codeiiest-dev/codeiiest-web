<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  // Can be static or computed
  title: 'Events | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'Events of CodeIIEST',
    },
  ],
})
</script>

<template>
  <div
    class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
  >
    <div class="space-y-14">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Events
        </h2>
        <p class="text-xl text-gray-500 dark:text-gray-300">
          You will find the various events and sessions the chapters of CodeIIEST organizes in the calendar.
        </p>
        <div class="flex justify-center mt-10">
          <Calendar />
        </div>
      </div>
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Past Events
        </h2>
        <p class="text-xl text-gray-500 dark:text-gray-300">
          All our past recorded events and sessions are uploaded to our <a class="text-red-400 hover:text-red-600 hover:underline" href="https://www.youtube.com/codeiiest" target="_blank">Youtube Channel</a>.
        </p>
        <div class="flex justify-center mt-10">
          <a href="https://www.youtube.com/watch?v=O8zdhpFAW_w"><img src="https://res.cloudinary.com/marcomontalbano/image/upload/v1625165552/video_to_markdown/images/youtube--O8zdhpFAW_w-c05b58ac6eb4c4700831b2b3070cd403.jpg"></a>
        </div>
      </div>
    </div>
  </div>
</template>
