<template>
  <div>
    <div class="hero is-centered has-text-centered is-vcentered">
      <div id="app">
        <div class="bg-col-div">
          <Reveal />
          <Robot />
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
            <AchievementCard
              :achv_title="item.title"
              :achv_content="item.content"
              :achv_source_code_url="item.source_code_url"
              :achv_project_url="item.project_url"
              :achv_image_url="item.image_url"
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
          image_url: '/ml/1.png',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
          image_url: '/ml/1.png',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
          image_url: '/ml/1.png',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
          image_url: '/ml/1.png',
        },
        {
          title: 'Lorem Ipsum',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five centur  but also the leap into electronic typesetting, remaining',
          source_code_url: 'https://google.com',
          project_url: 'https://github.com',
          image_url: '/ml/1.png',
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
.revealdiv {
  width: 40%;
  height: 100vh;
  padding-top: 30vh;
  /* border: 1px solid blue; */
}
.container {
  padding: 100px 20px 0;
  max-width: 960px;
  margin: 0 auto;
}

#app {
  /* background: rgb(132, 211, 232);
   */
  background-color: #141528;
  /* background: #black; */
  padding-top: 10vh;
  height: 100vh;
  width: 100vw;
}
.xx {
  border: 1px solid red;
}
.bg-col-div {
  background-color: #141528;
}
</style>
