<template>
  <div>
    <div
      class="hero is-centered has-text-centered is-vcentered has-background-black"
    >
      <div id="app">
        <vue-particles
          color="#f05454"
          :particle-opacity="1"
          :particles-number="75"
          shape-type="circle"
          :particle-size="5"
          lines-color="#f05454"
          :lines-width="1"
          :line-linked="true"
          :line-opacity="0.9"
          :lines-distance="200"
          :move-speed="7"
          :hover-effect="true"
          hover-mode="grab"
          :click-effect="true"
          click-mode="push"
        >
        </vue-particles>
        <div class="container has-text-white logo">
          <h1 class="reveal-wrap mb-2">
            <span id="text-reveal" class="big-text">Development</span>
          </h1>
          <div class="reveal-div">
            <h1 class="reveal-wrap-1">
              <span id="text-reveal-1" class="small-text-1">Code</span>
            </h1>
            <h1 class="reveal-wrap-1">
              <span id="text-reveal-2" class="small-text-2">Build</span>
            </h1>
            <h1 class="reveal-wrap-1">
              <span id="text-reveal-3" class="small-text-3">Deploy</span>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container mb-2">
        <div class="columns">
          <div class="column is-desktop is-two-fifths">
            <figure class="image">
              <img src="/dev/development.jpg" alt="ml image" />
            </figure>
          </div>

          <div class="column is-desktop">
            <div class="content is-medium">
              <h1 class="title mt-5">Welcome to the Development Chapter</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent et massa nisl. Quisque aliquet, nulla eu ullamcorper
                pellentesque, nisi lorem suscipit quam, et auctor sapien erat eu
                ante. Curabitur mattis, ligula sed vestibulum vulputate, est
                augue malesuada lorem, ullamcorper suscipit quam eros sit amet
                mi.
              </p>
              <p>
                Phasellus nec rutrum diam. Fusce laoreet pharetra tellus, id
                malesuada libero placerat in. In non nisl quis leo condimentum
                lobortis quis vel lorem.
              </p>
              <p>
                Pellentesque justo lacus, efficitur id congue sed, volutpat id
                odio. Aenean placerat, quam a molestie cursus, metus nulla
                tristique magna, vitae porttitor enim ipsum cursus sapien. Proin
                sit amet libero eu turpis ultrices vestibulum. Proin suscipit
                efficitur eros, sollicitudin cursus massa.
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
          <Devs
            :achv_title="item.title"
            :achv_content="item.content"
            :achv_source_code_url="item.source_code_url"
            :achv_project_url="item.project_url"
            :image_url="item.image"
          />
        </div>
      </div>
    </div>
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
          image: '/dev/proj-1.jpg',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
          image: '/dev/proj-1.jpg',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
          image: '/dev/proj-1.jpg',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
          image: '/dev/proj-1.jpg',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
          image: '/dev/proj-1.jpg',
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
    window.setTimeout(() => {
      document.getElementById('text-reveal-2').style.transform =
        'translate(0, 0)'
    }, 3500)
    window.setTimeout(() => {
      document.getElementById('text-reveal-3').style.transform =
        'translate(0, 0)'
    }, 4500)
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
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
}
.reveal-wrap {
  margin: 0;
  text-align: center;
  font-size: 80px;
  overflow: hidden;
  line-height: 1;
}
.reveal-wrap-1 {
  margin: 0;
  text-align: center;
  font-size: 40px;
  overflow: hidden;
  line-height: 1;
}
.small-text-1 {
  display: block;
  transform: translate(0, -100%);
  animation: reveal2 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
  animation-delay: 1.5s;
}
.small-text-2 {
  display: block;
  transform: translate(0, 100%);
  animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
  animation-delay: 2.5s;
}
.small-text-3 {
  display: block;
  transform: translate(0, -100%);
  animation: reveal2 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
  animation-delay: 3.5s;
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
  background: rgba(35, 40, 48, 0.1);
  height: 100vh;
  width: 100vw;
}
</style>
