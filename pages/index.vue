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
  mounted () {
    if(!this.$cookies.get("visit")) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      })
      this.$cookies.set("visit", 1, 0)
    }
  }
  
}
</script>

<style>
</style>
