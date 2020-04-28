<template>
  <div>
    <div class="section">
      <div class="container">
        <h1 class="is-size-2 has-text-centered">
          How to reach us?
        </h1>
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="box">
              <h1 class="is-size-4 has-text-centered">
                {{ address.title }}
              </h1>
              <p class="is-size-5 has-text-centered">
                {{ address.content }}
              </p>
            </div>
          </div>
          <div class="column is-4">
            <div class="box">
              <h1 class="is-size-4 has-text-centered">
                {{ mail.title }}
              </h1>
              <p class="is-size-5 has-text-centered">
                {{ mail.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section has-background-dark">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <h1 class="is-size-3 has-text-white has-text-centered">
              Contact us directly!
            </h1>
            <div class="box">
              <b-field label="Name">
                <b-input v-model="name" placeholder="Your name"></b-input>
              </b-field>

              <b-field label="Email">
                <b-input type="email" value="email" placeholder="Your email" v-model="email" maxlength="30"> </b-input>
              </b-field>

              <b-field label="Message">
                <b-input maxlength="200" v-model="message" placeholder="Type your query here..." type="textarea"></b-input>
              </b-field>
              <button class="button is-link"> Submit </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: {
        title: "Address",
        content: "IIEST Shibpur, Howrah 711103, West Bengal"
      },
      mail: {
        title: "Email",
        content: "codeiiest@gmail.com"
      },

      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    validemail() {
      return false;
    },
    submit() {}
  },
  loading: false,
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  }
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.has-margin-bottom-2 {
  margin-bottom: 2rem;
}
.has-background-indigo {
  background-color: #3b5998;
}
</style>
