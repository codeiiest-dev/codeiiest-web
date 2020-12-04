<template>
  <div class="section container">
    <div class="columns is-centered">
      <div v-for="(item, index) in row1" :key="index" class="column is-4">
        <div class="card is-fullheight">
          <div class="card-content">
            <div class="level">
              <div class="level-item">
                <figure class="image is-48x48">
                  <font-awesome-icon :icon="item.icon" size="3x" />
                </figure>
              </div>
            </div>
            <h1 class="title is-size-4 has-text-centered">
              {{ item.header }}
            </h1>
            <p class="subtitle has-text-centered">
              {{ item.subheader }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div v-for="(item, index) in row2" :key="index" class="column is-4">
        <div class="card">
          <div class="card-content">
            <div class="level">
              <div class="level-item">
                <figure class="image is-48x48">
                  <font-awesome-icon :icon="item.icon" size="3x" />
                </figure>
              </div>
            </div>
            <h1 class="title is-size-4 has-text-centered">
              {{ item.header }}
            </h1>
            <p class="subtitle has-text-centered text-primary">
              {{ item.subheader }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%;
  min-height: 180px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: rgba(43, 32, 53, 0.083);
  box-shadow: 2px 2px 5px #888888;
}
</style>
<script>
export default {
  data() {
    return {
      row1: [
        {
          header: 'Competitive Programming',
          subheader: 'The art of problem solving',
          icon: ['fas', 'code'],
        },
        {
          header: 'Security',
          subheader: "It's not all l33t hax0r",
          icon: ['fas', 'user-secret'],
        },
      ],
      row2: [
        {
          header: 'Machine Learning',
          subheader: 'Trying to take away the jobs of the other three',
          icon: ['fas', 'robot'],
        },
        {
          header: 'Open Source & Development',
          subheader: 'The art of writing and documenting readable code',
          icon: ['fab', 'android'],
        },
      ],
    }
  },
}
</script>
