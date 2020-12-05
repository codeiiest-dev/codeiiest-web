<template>
  <div>
    <div
      class="hero is-centered has-text-centered is-vcentered has-background-black"
    >
      <div id="app">
        <vue-particles
          color="#eb34de"
          :particle-opacity="1"
          :particles-number="95"
          shape-type="polygon"
          :particle-size="3"
          lines-color="#eb34de"
          :lines-width="1"
          :line-linked="true"
          :line-opacity="0.75"
          :lines-distance="100"
          :move-speed="7"
          :hover-effect="true"
          hover-mode="grab"
          :click-effect="true"
          click-mode="push"
        >
        </vue-particles>
        <h1 class="is-size-1 has-text-white logo">Machine Learning</h1>
        <p class="is-size-4 has-text-white has-text-centered pt-5">
          “Is artificial intelligence less than our intelligence?” —Spike Jonze
        </p>
        <!-- <p class="has-text-white">abc</p> -->
      </div>
    </div>
    <section class="hero">
      <div class="hero-body">
        <!-- <div class="columns xx">
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
          </div> -->

        <!-- <section class="section is-dark">
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
          </section> -->
        <div class="container">
          <div class="columns">
            <div class="column is-desktop is-two-fifths">
              <figure class="image">
                <img src="/ml/intropic.png" alt="ml image" />
              </figure>
            </div>

            <div class="column is-desktop">
              <div class="content is-medium">
                <h1 class="title mt-5">
                  Welcome to the Machine Learning Chapter
                </h1>
                <p>
                  Machine learning is a part and parcel of artificial
                  intelligence. It is a study and development of algorithms
                  which facilitates learning by experience of machines.
                </p>
                <p>
                  Although machine learning is a field within computer science,
                  it differs from traditional computational approaches.
                </p>
                <p>
                  Our innovative minds find out the different ways we can use
                  machine learning to solve our real life problems effectively
                  and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="columns is-8-desktop is-variable is-centered is-flex is-flex-wrap-wrap mt-5"
        >
          <div
            v-for="(item, index) in achievements"
            :key="index"
            class="column is-two-thirds-mobile is-one-third-tablet is-one-third-widescreen"
          >
            <Mlcard
              :achv_title="item.title"
              :achv_content="item.content"
              :achv_source_code_url="item.source_code_url"
              :achv_project_url="item.project_url"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievements: [
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
        },
      ],
    }
  },
}
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
