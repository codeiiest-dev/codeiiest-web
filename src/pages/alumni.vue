<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { alumniMembers } from '~/logic';
useHead({
    // Can be static or computed
    title: 'Alumni | CodeIIEST',
    meta: [
        {
            name: 'description',
            content: 'Meet the people who carried us to where we are today!',
        },
    ],
});
</script>

<template>
    <div>
        <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-8 sm:space-y-12">
                <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Alumni</h2>
                    <p class="text-xl text-gray-500">
                        Meet the people who carried us to where we are today!
                    </p>
                </div>
                <ul
                    class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
                    x-max="1"
                >
                    <li v-for="(alumni, index) in alumniMembers" :key="index">
                        <div class="space-y-4">
                            <img
                                class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 filter grayscale ring-2 hover:shadow-red-700 hover:shadow-2xl hover:ring-red-400 hover:grayscale-0 transition duration-300 fade"
                                :src="alumni.avatar"
                                alt
                            />
                            <div class="space-y-2">
                                <div class="text-xs font-medium lg:text-sm">
                                    <h3>{{ alumni.name }}</h3>
                                    <ul class="flex justify-center space-x-5">
                                        <li v-if="alumni.link.twitter">
                                            <a
                                                :href="alumni.link.twitter"
                                                target="_blank"
                                                class="text-gray-400 hover:text-blue-300"
                                                rel="noreferrer"
                                            >
                                                <span class="sr-only">Twitter</span>
                                                <fa-brands-twitter class="w-5 h-5" />
                                            </a>
                                        </li>

                                        <li v-if="alumni.link.linkedin">
                                            <a
                                                :href="alumni.link.linkedin"
                                                target="_blank"
                                                class="text-gray-400 hover:text-blue-400"
                                                rel="noreferrer"
                                            >
                                                <span class="sr-only">LinkedIn</span>
                                                <fa-brands-linkedin class="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li v-if="alumni.link.github">
                                            <a
                                                :href="alumni.link.github"
                                                target="_blank"
                                                class="text-gray-400 hover:text-gray-500"
                                                rel="noreferrer"
                                            >
                                                <span class="sr-only">Github</span>
                                                <fa-brands-github class="w-5 h-5" />
                                            </a>
                                        </li>
                                        
                                        <li v-if="alumni.link.facebook">
                                            <a
                                                :href="alumni.link.facebook"
                                                target="_blank"
                                                class="text-gray-400 hover:text-blue-600"
                                                rel="noreferrer"
                                            >
                                                <span class="sr-only">Facebook</span>
                                                <fa-brands-facebook class="w-5 h-5" />
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
