<template>
  <div>
    <Hero />
    <Chapters />
    <Description />
  </div>
</template>

<script>
import Hero from '~/components/Landing/Hero.vue'
import Chapters from '~/components/Landing/Chapters.vue'
import Description from '~/components/Landing/Description.vue'

export default {
  components: {
    Hero,
    Description,
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
