<template>
  <div>
    <Carousel />
    <Chapters />
    <Hero />
  </div>
</template>

<script>
import Hero from '~/components/Landing/Hero.vue'
import Carousel from '~/components/Landing/Carousel.vue'
import Chapters from '~/components/Landing/Chapters.vue'
export default {
  components: {
    Carousel,
    Hero,
    Chapters
  },
  loading:false,
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
  
}
</script>

<style>
</style>
