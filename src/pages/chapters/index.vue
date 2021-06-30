<script setup lang="ts">
const chapters: Array<{name: String; route: String}> = [
  { name: 'Development', route: '/chapters/development' },
  { name: 'Competitive Programming', route: '/chapters/competitive-programming' },
  { name: 'Information Security', route: '/chapters/infosec' },
  { name: 'Machine Learning', route: '/chapters/machine-learning' },
  { name: 'Women@CodeIIEST', route: '/chapters/women-codeiiest' },
]
</script>

<template>
  <h1 class="text-5xl">
    Chapters
  </h1>
  <div v-for="(chapter, index) in chapters" :key="index" class="text-center">
    <div class="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="py-2">
          <router-link :to="chapter.route" class="block mt-1 p-2 text-lg leading-tight font-medium hover:underline">
            {{ chapter.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
