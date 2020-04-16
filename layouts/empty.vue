<template>
  <main>
    <Navbar />
    <nuxt />
  </main>
</template>
<style>
.footer {
  padding: 3rem 1.5rem 1rem;
}
</style>
<script>
import Navbar from '~/components/base/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
