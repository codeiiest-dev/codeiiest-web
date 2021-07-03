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
            We give the members exposure to the real-world problems and the machine learning algorithms required to solve the problem and thus giving them hands-on experience to deal with complex real-world problems using simple but effective algorithms. We aim at teaching simple concepts like “what is ML and how it is useful?” as well as complex topics like Deep learning but in a systematic and methodical way.
          </p>
        </div>
        <ul class="flex flex-wrap flex-row justify-center items-center mt-5">
          <img
            height="612"
            width="612"
            src="https://media.istockphoto.com/photos/robot-with-education-hud-picture-id966248982?s=612x612"
            alt="Robot with education"
            class="mx-2"
          />
        </ul>
        <div
          class="text-left mt-6 prose prose-red prose-lg text-gray-500 dark:text-gray-400 mx-auto"
        >
          <ul>
            <li>We have covered a few basic topics like <i>linear regression</i> and <i>supervised and unsupervised learning</i> and solved the <i>titanic survival problem on Kaggle.</i></li>
            <li>We aim at inviting seniors and domain experts to have a talk and encourage people to take up ML as a career. We are also planning to collaborate with Women@CodeIIEST to promote the engagement of girls in this domain.</li>
            <li>
              In the short period since its inception, we have held a couple of sessions. In one of the sessions, we had Suryansh Gupta, FTE at Google, as our guest speaker who shared his working experience in this domain. We are planning future sessions with Anjishnu Mukherjee, GSOC 2020 @ mlpack, who can further enlighten us with his expertise. We are intending to bring as many seniors as possible to share their expertise.
            </li>
            <li>
              The size and workload of the club will increase based on response and interest. We make it our first priority to take responses from the attendees of the session so that we can work on our loopholes and come back better and stronger.
            </li>
            <li>
              Projects, certificates, and hackathons will be held based on interests and peer learning is always motivated.
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
  title: 'ML | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'The Machine Learning chapter of CodeIIEST',
    },
  ],
})
</script>
