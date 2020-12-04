<template>
  <div class="modal-card">
    <div class="modal-card-head has-background-white">
      <h3 class="title has-text-centered has-text-black">Sign in</h3>
    </div>
    <section class="modal-card-body">
      <div class="container">
        <b-field label="E-Mail">
          <b-input v-model="email" type="email" placeholder="E-Mail" required>
          </b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            v-model="password"
            type="password"
            placeholder="Password"
            required
          >
          </b-input>
        </b-field>
        <div
          v-if="formError.length > 0"
          class="error has-text-danger"
          v-text="formError"
        ></div>
      </div>
    </section>
    <footer class="modal-card-foot has-background-white">
      <button class="button" type="button" @click="$parent.close()">
        Close
      </button>
      <button class="button is-dark" @click="login()">Login</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formError: '',
    }
  },
  methods: {
    login() {
      this.formError = ''
      this.$store
        .dispatch('userLogin', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          // console.log(error)
          this.formError = error.message
        })
    },
  },
}
</script>
