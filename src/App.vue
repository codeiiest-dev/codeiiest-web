<script setup lang="ts">
import { useHead, Head } from '@vueuse/head'
import { isDark } from '~/logic'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'CodeIIEST',
  meta: [
    { name: 'description', content: 'Official CodeIIEST Website' },
  ],
})
</script>

<template>
  <Head>
    <link v-if="isDark" rel="icon" href="/darkicon.jpg" type="image/x-icon">
    <link v-if="!isDark" rel="icon" href="/lighticon.jpg" type="image/x-icon">
  </Head>
  <router-view />
</template>
