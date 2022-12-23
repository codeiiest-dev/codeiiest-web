<template>
    <div class="gallery-container">
        <div class="gallery-item" v-for="(image, index) in images" :key="index">
            <img :src="image" alt="random image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
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