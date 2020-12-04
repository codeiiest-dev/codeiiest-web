<template>
  <div>
    <div class="section">
      <div class="container has text-centered">
        <h1 class="is-size-2 has-text-centered">
          {{ header.title }}
        </h1>
        <p class="has-text-centered is-size-4 sub1">
          {{ header.subtitle }}
        </p>
      </div>
    </div>
    <div class="hero has-background-dark">
      <div class="hero-body container">
        <div
          class="columns is-8-desktop is-variable is-centered is-flex is-flex-wrap-wrap"
        >
          <div
            v-for="(item, index) in team"
            :key="index"
            class="column is-two-thirds-mobile is-one-third-tablet is-one-quarter-widescreen has-background-dark"
          >
            <Card :image="item.url" :name="item.name" :role="item.role" />
            <!-- @TODO: Add social icons and github links and stuff -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        title: 'Our Team',
        subtitle:
          "CodeIIEST is lucky to have a dedicated team working hard for the betterment of everyone. Let's go on a trip to know a bit about each of them.",
      },
      team: [
        {
          name: 'Dwaipayan Ray',
          role: 'General Secretary',
          url: '/images/Dwai.jpeg',
        },
        {
          name: 'Shivam Singh',
          role: 'Treasurer',
          url: '/images/Shivam.jpeg',
        },

        {
          name: 'Generic Person',
          role: 'Head of Chapter Something',
          url: 'https://bulma.io/images/placeholders/480x480.png',
        },
        {
          name: 'Generic Person 2',
          role: 'Head of another chapter',
          url: 'https://bulma.io/images/placeholders/480x480.png',
        },

        {
          name: 'Generic Person',
          role: 'Head of Chapter Something',
          url: 'https://bulma.io/images/placeholders/480x480.png',
        },
        {
          name: 'Generic Person 2',
          role: 'Head of another chapter',
          url: 'https://bulma.io/images/placeholders/480x480.png',
        },

        {
          name: 'Generic Person',
          role: 'Head of Chapter Something',
          url: 'https://bulma.io/images/placeholders/480x480.png',
        },
        {
          name: 'Generic Person 2',
          role: 'Head of another chapter',
          url: 'https://bulma.io/images/placeholders/480x480.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.sub1 {
  padding: 1vh 10vw;
}
.box {
  min-height: 25rem !important;
}
img {
  object-fit: contain;
  width: 100%;
  max-height: 15rem;
}
</style>
