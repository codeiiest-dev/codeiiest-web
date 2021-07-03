<template>
  <div>
    <div class="items-center flex flex-col">
      <ri-women-line class="text-4xl text-extrabold" />
    </div>
    <div class="relative py-8 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span
              class="block text-base text-center text-red-600 font-semibold tracking-wide uppercase dark:text-red-400"
            >Introducing</span>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >Women@CodeIIEST</span>
          </h1>
          <p class="text-left mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
            Established only in 2021, this is the newest chapter to emerge from the club. It is a supportive community that recognizes the efforts and achievements of the women in CodeIIEST and provides a platform for those with more experience to mentor others. We cover everything from personal branding, soft skills, industry knowledge, to technical skills as well.
          </p>
          <p class="text-left mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
            Our aim is to allow the women to feel more comfortable in the club and to participate more freely. Because engineering is a male-dominated field, the process of involving women needs to be gradual - we want to initiate this process.
          </p>
        </div>
        <div
          class="text-left mt-6 prose prose-red prose-lg text-gray-500 dark:text-gray-400 mx-auto"
        >
          <ul>
            <li>In the short duration of our existence, this chapter has held multiple sessions on data structures, led by Diksha, IT batch of 2021, and Aparajita, IT batch of 2022.</li>
            <li>
              We hold special interviews and AMA sessions with women who have won scholarships or accepted big offers - and would be willing to share advice with the interested audience.
            </li>
            <li>We held personal branding sessions like the #IAmRemarkable session, where we invited external facilitators to conduct this event.</li>
            <li>
              Most importantly, we hope to offer the women a chance to network, connect, gain exposure and reach out for opportunities that come their way.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'Women@CodeIIEST | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'The girls chapter of CodeIIEST',
    },
  ],
})
</script>
