<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { alumniMembers } from '~/logic';
useHead({
    // Can be static or computed
    title: 'Alumni | CodeIIEST',
    meta: [
        {
            name: 'description',
            content: 'Our Seniors, Vidhayak, Senpai',
        },
    ],
});
</script>

<template>
    <div>
        <div
            class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
        >
            <div class="space-y-8 sm:space-y-12">
                <div
                    class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl"
                >
                    <h2
                        class="text-3xl font-extrabold tracking-tight sm:text-4xl"
                    >
                        Our Alumnis
                    </h2>
                    <p class="text-xl text-gray-500">
                        Risus velit condimentum vitae tincidunt tincidunt.
                        Mauris ridiculus fusce amet urna nunc. Ut nisl ornare
                        diam in.
                    </p>
                </div>
                <ul
                    class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
                    x-max="1"
                >
                    <li v-for="(alumni, index) in alumniMembers" :key="index">
                        <div class="space-y-4">
                            <img
                                class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                                :src="alumni.avatar"
                                alt=""
                            />
                            <div class="space-y-2">
                                <div class="text-xs font-medium lg:text-sm">
                                    <h3>{{ alumni.name }}</h3>
                                    <ul class="flex justify-center space-x-5">
                                        <li v-if="alumni.link.twitter">
                                            <a
                                                :href="alumni.link.twitter"
                                                target="_blank"
                                                class="text-gray-400 hover:text-gray-500"
                                                rel="noreferrer"
                                            >
                                                <span class="sr-only"
                                                    >Twitter</span
                                                >
                                                <svg
                                                    class="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </li>

                                        <li v-if="alumni.link.linkedin">
                                            <a
                                                :href="alumni.link.linkedin"
                                                target="_blank"
                                                class="text-gray-400 hover:text-gray-500"
                                                rel="noreferrer"
                                            >
                                                <span class="sr-only"
                                                    >LinkedIn</span
                                                >
                                                <svg
                                                    class="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li v-if="alumni.link.github">
                                            <a
                                                :href="alumni.link.github"
                                                target="_blank"
                                                class="text-gray-400 hover:text-gray-500"
                                                rel="noreferrer"
                                            >
                                                <span class="sr-only"
                                                    >Github</span
                                                >
                                                <svg
                                                    class="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>