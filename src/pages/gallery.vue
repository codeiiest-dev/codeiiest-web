<script setup>
import Gallery from '~/components/Gallery.vue';
import { useHead } from '@vueuse/head'
useHead({
    title: 'Gallery | CodeIIEST',
    meta: [
        {
            name: 'description',
            content: 'Snapshots of our events!',
        },
    ],
});

</script>

<template>
    <div>
        <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
                <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Gallery
                    </h2>
                </div>
                <div>
                    <Gallery />
                </div>

            </div>
        </div>

    </div>
</template>
