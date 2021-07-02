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

const events: Array<{link: String; image: String}> = [
  { link: 'https://www.youtube.com/watch?v=O8zdhpFAW_w', image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625165552/video_to_markdown/images/youtube--O8zdhpFAW_w-c05b58ac6eb4c4700831b2b3070cd403.jpg' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200008/video_to_markdown/images/youtube--4vosyExcRvY-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=4vosyExcRvY' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200675/video_to_markdown/images/youtube--uAHySjoHXuE-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=uAHySjoHXuE' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200767/video_to_markdown/images/youtube--dEz7BYCAxZA-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=dEz7BYCAxZA' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625201123/video_to_markdown/images/youtube--cwRYql9jzXE-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=cwRYql9jzXE' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625201444/video_to_markdown/images/youtube--eWfE27FhHCI-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=eWfE27FhHCI' },
]
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center mt-10 px-10">
          <div v-for="event in events" :key="event.link">
            <a :href="event.link" target="_blank"><img :src="event.image"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
