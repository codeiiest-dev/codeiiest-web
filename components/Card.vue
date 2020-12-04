<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by4">
        <img :src="image" alt="Picture" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ name }}</p>
        </div>
      </div>
      <div class="content">
        {{ role }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
