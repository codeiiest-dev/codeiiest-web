<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, reactive } from 'vue'
import { getEvents, formatDateTime, ytEvents } from '~/logic'
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

const events: Array<any> = reactive([])

onMounted(async() => {
  const { items } = await getEvents()
  items.forEach((i: any) => events.push(i))
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
        You will find the various events and sessions the chapters of CodeIIEST organizes in the calendar.
      </p>
    </div>
    <div class="max-w-lg mx-auto px-6">
      <div class="flow-root">
        <p v-if="events.length === 0">
          No events
        </p>
        <ul class="mb-16">
          <li v-for="(event) in events" :key="event.id">
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
                    <div>
                      <a
                        href="#"
                        class="font-medium text-red-600 font-600 text-md dark:text-red-400"
                      >{{ event.summary }}</a>
                    </div>
                    <p
                      class="mt-0.5 text-sm text-gray-500 font-300 italic dark:text-gray-400"
                    >
                      {{ formatDateTime(event.start.dateTime) }} ~ {{ formatDateTime(event.end.dateTime) }}
                    </p>
                  </div>
                  <div class="mt-4 text-sm text-gray-700 font-500 dark:text-gray-300">
                    <p>{{ event.description }}</p>
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
      >Youtube Channel</a>.
    </p>
    <div class="grid md:grid-cols-2 grid-cols-1 mt-4">
      <div v-for="event in ytEvents" :key="event.link" class="max-w-md p-2">
        <a :href="event.link" target="_blank">
          <img :src="event.image" />
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
