<template>
    <ImageModal ref="imageModal" :image="selectedImage" />
    <div class="gallery-container">
        <div class="gallery-item" v-for="(image, index) in images" :key="index">
            <v-lazy-image :src="image" alt="random image" @click="openModal(image)" />
        </div>
    </div>
</template>

<style>
.v-lazy-image {
    filter: blur(20px);
    transition: filter 0.7s;
}

.v-lazy-image-loaded {
    filter: blur(0);
}

.gallery-container {
    column-gap: 1em;
}

.gallery-item {
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
}

.gallery-item>img {
    width: inherit;
    border-radius: 15px;
}

@media only screen and (min-width: 1024px) {
    .gallery-container {
        column-count: 4;
    }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
    .gallery-container {
        column-count: 3;
    }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
    .gallery-container {
        column-count: 2;
    }
}
</style>

<script>
import VLazyImage from "v-lazy-image";
import ImageModal from "./ImageModal.vue";

export default {
    name: 'Gallery',
    components: {
        "v-lazy-image": VLazyImage,
        ImageModal,
    },
    data() {
        return {
            images: [],
            selectedImage: '',
        }
    },
    methods: {
        getGalleryImages() {
            const images = import.meta.glob('../../public/gallery/*.*')
            for (const path in images) {
                this.images.push(path.replace('../../public', ''));
            }
        },

        openModal(image) {
            this.selectedImage = image;
            this.$refs.imageModal.toggleModal();
        },
    },
    mounted() {
        this.getGalleryImages();
        console.log(this.images);
    },
}
</script>