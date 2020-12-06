<template>
  <div>
    <div
      class="hero is-centered has-text-centered is-vcentered has-background-black"
    >
      <div id="app">
        <figure class="image">
          <video src="" alt="hacking image" autoplay loop type="video/mp4" />
        </figure>
        <h1 class="toptext is-size-1 has-text-white logo glow">d4rks0c13ty</h1>
        <p class="toptext is-size-4 has-text-white has-text-centered pt-5">
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
                  <h1 class="title toptext">Welcome to d4rks0c13ty!</h1>
                  <p class="is-family-monospace">
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
              <h1 class="title is-2 toptext">PicoCTF 2018</h1>
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
@font-face {
  font-family: Hacked;
  src: url(https://hackedfont.com/HACKED.ttf);
}
.toptext {
  font-family: Hacked;
}
.logo {
  margin-top: 25vh;
  font-size: 6rem !important;
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
.glow {
  color: #fff;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #c4f5f8,
      0 0 40px #00e64d, 0 0 50px #00e686;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #60f699, 0 0 40px #60f699,
      0 0 50px #60f699, 0 0 60px #60f699;
  }
}
</style>
