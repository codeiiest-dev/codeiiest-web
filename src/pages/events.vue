<script setup lang="ts">
import spinner from "~/components/spinner.svg";
import { useHead } from '@vueuse/head'
import { onMounted, reactive } from 'vue'
import { getEvents, formatDateTime, ytEvents, getGoogleEventURL, sanitizeHTML } from '~/logic'
import Calendar from '~/components/Calendar.vue'

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

const state: {events: Array<any>, loading: boolean} = reactive({
  events: [],
  loading: true
})

onMounted(async() => {
  const items = await getEvents()
  items.forEach((i: any) => state.events.push(i))
  state.loading = false;
})

</script>

<template>
  <div class="py-8">
    <div class="mb-12">
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Events
      </h2>
      <p
        class="text-xl text-gray-500 dark:text-gray-300"
      >
        You will find the various events and sessions by chapters of CodeIIEST in this timeline.
      </p>
    </div>
    <div class="max-w-lg mx-auto px-6">
      <div class="flow-root">
        <p v-if="state.events.length === 0 && !state.loading">
          No events
        </p>
        <p v-if="state.loading">
          <img :src="spinner" class="h-18 w-18 mx-auto mb-5"/>
        </p>
        <ul v-else class="mb-16">
          <li v-for="(event) in state.events" :key="event.id">
            <div class="relative pb-8">
              <span
                class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-700 dark:bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex items-start space-x-3">
                <div class="relative">
                  <carbon-code class="p-1 h-10 w-10 font-bold rounded-full text-red-500 dark:text-red-400 bg-white dark:bg-dark-900 flex items-center justify-center" />
                </div>
                <div class="min-w-0 flex-1 text-left pl-4">
                  <div>
                    <div class="flex flex-row items-center">
                      <p class="font-medium text-red-600 font-600 text-md dark:text-red-400 mr-2">
                        {{ event.summary }}
                      </p>
                      <a target="_blank" :href="getGoogleEventURL(event)">
                        <carbon-bookmark-add />
                      </a>
                    </div>
                    <p
                      class="mt-0.5 text-sm text-gray-500 font-300 italic dark:text-gray-400"
                    >
                      {{ formatDateTime(event.start.dateTime) }} ~ {{ formatDateTime(event.end.dateTime) }}
                    </p>
                  </div>
                  <div class="mt-4 text-sm text-gray-700 font-500 dark:text-gray-300 event-body" v-html="sanitizeHTML(event.description)">
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
      Past Events & Sessions
    </h2>
    <p class="text-xl text-gray-500 dark:text-gray-300">
      All our past recorded events and sessions are uploaded to our
      <a
        class="text-red-400 hover:text-red-600 hover:underline"
        href="https://www.youtube.com/codeiiest"
        target="_blank"
        rel="noreferrer"
      >Youtube Channel</a>.
    </p>
    <div class="grid md:grid-cols-2 grid-cols-1 mt-4">
      <div v-for="event in ytEvents" :key="event.link" class="max-w-md p-2">
        <a :href="event.link" target="_blank" rel="noreferrer">
          <img :src="event.image" :alt="event.alt" />
        </a>
      </div>
    </div>
  </div>
  <div class="mt-16 flex flex-col justify-center items-center mb-10">
    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
      Calendar
    </h2>
    <p
      class="text-xl text-gray-500 dark:text-gray-300 mb-4"
    >
      Refer to the calendar below to know more about the events & sessions organised by CodeIIEST
    </p>
    <Calendar />
  </div>
</template>
