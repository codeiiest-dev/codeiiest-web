<template>
  <!-- <div class="columns features xx"> -->
  <div class="column">
    <div class="card is-shady">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            :src="achvImage"
            alt="Placeholder image"
            class="modal-button"
            data-target="modal-image2"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4>{{ achvTitle }}</h4>
          <p>
            {{ achvContent }}
          </p>
          <div class="columns is-centered-mobile is-variable mt-3 mb-2">
            <button
              class="button is-medium is-info is-light mr-3"
              @click="gotoSourceCode"
            >
              <span class="icon is-medium">
                <i class="fab fa-github">
                  <font-awesome-icon :icon="['fab', 'github']" size="1x" />
                </i>
              </span>
              <span>View source code</span>
            </button>
            <button
              class="button is-medium is-success is-light"
              @click="gotoProject"
            >
              <span>View Project</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    achvTitle: {
      type: String,
      default: '',
    },
    achvContent: {
      type: String,
      default: '',
    },
    achvProjectURL: {
      type: String,
      default: '',
    },
    achvSource: {
      type: String,
      default: '',
    },
    achvImage: {
      type: String,
      default: '',
    },
  },
  methods: {
    gotoSourceCode() {
      location.href = this.achvSource
    },
    gotoProject() {
      location.href = this.achvProjectURL
    },
  },
}
</script>
<style scoped>
.yy {
  border: 1px solid blue;
}
.custom-hover:hover {
  /* background: red; */
  border: 1px solid red;
}
</style>
