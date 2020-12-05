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
        <!-- <h1 class="is-size-1 has-text-white logo">Machine Learning</h1>
        <p class="is-size-4 has-text-white has-text-centered pt-5">
          “Is artificial intelligence less than our intelligence?” —Spike Jonze
        </p> -->
        <div class="container has-text-white logo">
          <h1 class="reveal-wrap mb-4">
            <span id="text-reveal" class="big-text">Machine Learning</span>
          </h1>
          <div class="reveal-div">
            <h1 class="reveal-wrap-1">
              <span id="text-reveal-1" class="small-text-1"
                >“Is artificial intelligence less than our intelligence?” —Spike
                Jonze</span
              >
            </h1>
          </div>
        </div>
      </div>
    </div>

    <section class="hero">
      <div class="hero-body">
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
  mounted() {
    window.setTimeout(() => {
      document.getElementById('text-reveal').style.transform = 'translate(0, 0)'
    }, 1500)
    window.setTimeout(() => {
      document.getElementById('text-reveal-1').style.transform =
        'translate(0, 0)'
    }, 2500)
  },
}
</script>
<style scoped>
.container {
  padding: 100px 20px 0;
  max-width: 960px;
  margin: 0 auto;
}
.reveal-div {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
}
.reveal-wrap {
  margin: 0;
  text-align: center;
  font-size: 60px;
  overflow: hidden;
  line-height: 1;
}
.reveal-wrap-1 {
  margin: 0;
  text-align: center;
  font-size: 30px;
  overflow: hidden;
  line-height: 1;
}
.small-text-1 {
  display: block;
  transform: translate(0, -100%);
  animation: reveal2 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
  animation-delay: 1.5s;
}

.big-text {
  display: block;
  color: white;
  transform: translate(0, 100%);
  animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
}

@keyframes reveal {
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes reveal2 {
  0% {
    transform: translate(0, -100%);
  }
  100% {
    transform: translate(0, 0);
  }
}

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
