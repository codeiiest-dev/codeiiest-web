<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
</script>

<template>
  <nav class="flex">
    <router-link class="icon-btn mx-2 flex-none" to="/" :title="'Home'">
      <Brand width="60" height="60" />
    </router-link>
    <div class="flex-auto"></div>

    <router-link class="mx-2 flex-none self-center toplink" to="/chapters" :title="'Chapters'">
      Chapters
    </router-link>

    <router-link class="mx-2 flex-none self-center toplink" to="/team" :title="'Team'">
      Team
    </router-link>

    <button class="icon-btn mx-2 flex-none !outline-none" :title="'Toggle Theme'" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>
  </nav>
</template>

<style scoped>
.toplink:hover{
  text-decoration: underline;
}
</style>
