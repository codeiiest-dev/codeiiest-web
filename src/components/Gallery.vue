<template>
    <div class="gallery-container">
        <div class="gallery-item" v-for="(image, index) in images" :key="index">
            <v-lazy-image :src="image" alt="random image" />
        </div>
    </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
    name: 'Gallery',
    components: {
        "v-lazy-image": VLazyImage,
    },
    data() {
        return {
            images: []
        }
    },
    methods: {
        getGalleryImages() {
            const images = import.meta.glob('../../public/gallery/*.*')
            for (const path in images) {
                this.images.push(path.replace('../../public', ''));
            }
        },
    },
    mounted() {
        this.getGalleryImages();
        console.log(this.images);
    },
}
</script>