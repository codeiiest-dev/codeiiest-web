<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, onUnmounted } from 'vue'
import { getEvents } from '~/logic'

useHead({
  title: 'Events | CodeIIEST',
  meta: [
    {
      name: 'description',
      content: 'Ongoing & past events',
    },
  ],
})

const events: Array<any> = []

onMounted(async() => {
  const { items } = await getEvents()
  events.push(items)
})

onUnmounted(() => {
  events.splice(0, events.length)
})
</script>

<template>
  <div class="py-8">
    <div class="max-w-lg mx-auto px-6">
      <div class="flow-root">
        <p v-if="events.length === 0">
          No events
        </p>
        <ul class="-mb-8">
          <li v-for="(event) in events" :key="event.id">
            <div class="relative pb-8">
              <span
                class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-700 dark:bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex items-start space-x-3">
                <div class="relative">
                  <img
                    class="
                      h-10
                      w-10
                      rounded-full
                      bg-gray-400
                      flex
                      items-center
                      justify-center
                      ring-8 dark:ring-white
                      ring-gray-700
                    "
                    src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1 text-left pl-4">
                  <div>
                    <div>
                      <a
                        href="#"
                        class="font-medium text-red-600 font-600 text-md dark:text-red-400"
                      >{{ event.source.title }}</a>
                    </div>
                    <p
                      class="mt-0.5 text-sm text-gray-500 font-300 italic dark:text-gray-400"
                    >
                      {{ event.start.date }} ~ {{ event.end.date }}
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
</template>
