<template>
  <div class="hero is-centered has-text-centered is-vcentered">
    <div id="app">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <h1 class="is-size-1 has-text-white logo">Code IIEST</h1>
      <p class="is-size-4 has-text-white has-text-centered">Imagination unleashed</p>
    </div>
  </div>
</template>

<style scoped>
.logo{
    margin-top: 38vh;
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
  height:100vh;
}
</style>
