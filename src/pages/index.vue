<template>
  <div class="text-center">
    <h1
      class="
        dark:text-gray-100
        text-gray-900 text-4xl
        tracking-tight
        font-extrabold
        sm:text-5xl
        md:text-6xl
        cursor-default
      "
    >
      <span class="block xl:inline">Code</span>
      <!-- space -->
      <span class="block text-red-600 xl:inline">IIEST</span>
    </h1>
    <p
      class="
        mt-3
        max-w-md
        mx-auto
        text-base text-gray-500
        dark:text-gray-400
        sm:text-lg
        md:mt-5
        md:text-xl
        md:max-w-3xl
        cursor-default
      "
    >
      The Coding Club of IIEST, Shibpur.
      <br /><br />
      CodeIIEST is one of the newest clubs of the <span class="font-bold">Indian Institute of Engineering Science and Technology, Shibpur</span>. Since its inception in November of 2014, the club has been actively involved in the development of comprehensive computer science abilities among students. The group is made up of a variety of interests and serves as a fantastic hub for a variety of instructive and interactive programs. The students stay up to date on new technology, which helps them improve their skills and foster creativity and innovation.
    </p>
    <div class="mt-15">
      <h1
        class="
          dark:text-gray-100
          text-gray-900 text-3xl
          tracking-tight
          font-bold
        "
      >
        Chapters
      </h1>
      <div class="flex flex-wrap justify-center mt-5">
        <div
          v-for="(chapter, index) in chapters"
          :key="index"
          class="
            w-full
            max-w-sm
            px-4
            py-3
            mx-5
            my-3
            bg-white
            rounded-md
            shadow-md
            hover:shadow-xl hover:shadow-red-700
            dark:hover:shadow-red-200
            dark:bg-dark-800
          "
        >
          <div>
            <h1
              class="mt-2 text-lg font-semibold text-gray-800 dark:text-white"
            >
              {{ chapter.name }}
            </h1>
            <p
              class="
                mt-2
                text-sm text-gray-600
                dark:text-gray-300
                cursor-default
              "
            >
              {{ chapter.descp }}
            </p>
          </div>

          <div>
            <div
              class="flex justify-center mt-2 text-gray-700 dark:text-gray-200"
            >
              <router-link
                :to="chapter.route"
                class="
                  mx-2
                  text-red-600
                  cursor-pointer
                  dark:text-red-400
                  hover:underline
                "
              >
                <span>Read More <carbon-arrow-right class="inline" /></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { chapters } from '~/logic'
</script>

<route lang="yaml">
meta:
  layout: default
</route>
