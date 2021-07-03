<template>
  <div>
    <div class="items-center flex flex-col">
      <carbon-code class="text-4xl text-extrabold" />
    </div>
    <div class="relative py-8 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span
              class="block text-base text-center text-red-600 font-semibold tracking-wide dark:text-red-400"
            >npm run dev</span>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >The Development Chapter</span>
          </h1>
          <p class="text-left mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
            We give members a head start in their
            <strong>open-source</strong> and development journeys by hosting
            <strong>seminars</strong> and
            <strong>AMAs</strong> with established student leaders in the field. We are a network of like-minded individuals who are enthusiastic to give back to the community by offering
            <strong>web</strong>,
            <strong>mobile development</strong> services to students, faculty, clubs, and organizations.
          </p>
        </div>
        <div
          class="text-left mt-6 prose prose-red prose-lg text-gray-500 dark:text-gray-400 mx-auto"
        >
          <ul>
            <li>The team focuses on upskilling its members so that they can create incredible applications, contribute to open source, and showcase their talent by participating in hackathons. To accomplish this we have conducted sessions on Git and Github, designing your portfolio using HTML, CSS accompanied with an educative competition.</li>
            <li>
              We intend to hold seminars on web & mobile development, including
              <strong>React</strong>,
              <strong>Vue</strong>,
              <strong>Flutter</strong>,
              <strong>React Native</strong>, and
              <strong>game development</strong>, as well as conduct engaging competitions and hackathons, to accelerate the process of learning of our members.
            </li>
            <li>We've created a welcoming and supportive environment where you get advice from experienced mentors and can also collaborate on group projects with your peers under their supervision.</li>
            <li>
              We have a fantastic group of mentors who have participated in open source programs such as
              <strong>Google Summer of Code</strong> under orgs like CERN, LibreOffice, Sugar Labs, Rocket.Chat, mlpack, graphspace,
              <strong>Coronasafe Fellowship Program</strong> and other open source programs.
            </li>
          </ul>
        </div>
        <ul class="flex flex-wrap flex-row justify-center items-center">
          <li v-for="(item) in devImages" :key="item.id">
            <img
              height="100"
              width="100"
              :src="item.src"
              :alt="item.alt"
              class="mx-2"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { devImages } from '~/logic'
useHead({
  title: 'Development | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'The Development Chapter of CodeIIEST',
    },
  ],
})
</script>
