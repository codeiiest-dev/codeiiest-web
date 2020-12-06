<template>
  <div>
    <div
      class="hero is-centered has-text-centered is-vcentered has-background-black"
    >
      <div id="app">
        <vue-particles
          color="#228B22"
          :particle-opacity="1"
          :particles-number="75"
          shape-type="circle"
          :particle-size="3"
          lines-color="#228B22"
          :lines-width="1"
          :line-linked="true"
          :line-opacity="0.75"
          :lines-distance="200"
          :move-speed="7"
          :hover-effect="true"
          hover-mode="grab"
          :click-effect="true"
          click-mode="push"
        >
        </vue-particles>
        <h1 class="is-size-1 has-text-white logo">d4rks0c13ty</h1>
        <p class="is-size-4 has-text-white has-text-centered pt-5">
          Exploit, Pwn, Hack
        </p>
      </div>
    </div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <figure class="image">
                <video
                  src="/hacking.mp4"
                  alt="hacking image"
                  autoplay
                  loop
                  type="video/mp4"
                />
              </figure>
            </div>
          </div>

          <section class="section is-dark">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="content is-medium">
                  <h2 class="subtitle is-4">
                    The InfoSec chapter of CodeIIEST
                  </h2>
                  <h1 class="title">Welcome to d4rks0c13ty!</h1>
                  <p>
                    A <i>Hacker</i> is someone who makes things. In this
                    context, it’s someone who makes things by programming
                    computers. This is the original, and purest definition of
                    the term, i.e., that you have an idea and you “hack”
                    something together to make it work.
                    <br />
                    It's not always cracking passwords or finding bugs in a
                    system. Wire your brain accordingly.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div class="is-divider"></div>
        </div>
      </div>
    </section>

    <div class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <figure class="image is-16by9">
                <img
                  src="/images/pico18.png"
                  alt="iiest ctf team @ picoctf 2018"
                />
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <h1 class="title is-2">PicoCTF 2018</h1>
              <h2 class="subtitle is-4">
                252nd Position Globally, with 12710 points
              </h2>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

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
