<template>
  <div
    class="hero is-centered has-text-centered is-vcentered has-background-black"
  >
    <div id="app">
      <vue-particles
        color="#dedede"
        :particle-opacity="0.7"
        :particles-number="120"
        shape-type="circle"
        :particle-size="4"
        lines-color="#dedede"
        :lines-width="1"
        :line-linked="true"
        :line-opacity="0.4"
        :lines-distance="150"
        :move-speed="3"
        :hover-effect="true"
        hover-mode="grab"
        :click-effect="true"
        click-mode="push"
      >
      </vue-particles>
      <h1 class="is-size-1 has-text-white logo">CodeIIEST</h1>

      <div class="image is-128x128 container">
        <img
          src="/codeiiest-web/images/codeiiest-dark.png"
          class="is-rounded"
        />
      </div>
      <p class="is-size-4 has-text-white has-text-centered pt-5">
        Learn, Develop, Compete
      </p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  margin-top: 25vh;
}

@media screen and (max-width: 768px) {
  .logo {
    margin-top: 30vh;
  }
}
#particles-js {
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 0;
}

#app {
  background: rgba(24, 24, 24, 0.99);
  height: 100vh;
  width: 100vw;
}
</style>
