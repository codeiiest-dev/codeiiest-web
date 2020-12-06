<template>
  <b-navbar :fixed-top="true" :transparent="true" class="is-dark nav pb-10">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <div class="is-flex is-flex-direction-row">
          <h2 class="title is-size-4 has-text-light">CodeIIEST</h2>
        </div>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item class="is-dark" tag="div">
        <b-navbar-dropdown label="Chapters" class="has-text-grey-light">
          <b-navbar-item :to="{ path: '/' }">Competitive Coding </b-navbar-item>
          <b-navbar-item :to="{ path: '/' }"> Development </b-navbar-item>
          <b-navbar-item :to="{ path: '/' }"> Machine Learning </b-navbar-item>
          <b-navbar-item :to="{ path: '/chapters/infosec' }">
            InfoSec
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="router-link" to="/team" class="has-text-grey-light">
          Team
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          to="/about"
          class="has-text-grey-light"
        >
          About Us
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          to="/contact"
          class="has-text-grey-light"
        >
          Contact
        </b-navbar-item>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" @click="handleLogin"> Login </a>
          <a class="button is-white" @click="handleSignUp"> SignUp </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import LoginCard from '~/components/authentication/LoginCard.vue'

export default {
  data() {
    return {}
  },
  methods: {
    handleLogin() {
      this.$buefy.modal.open({
        parent: this,
        component: LoginCard,
        hasModalCard: true,
        trapFocus: true,
      })
    },
    handleSignUp() {},
  },
}
</script>

<style scoped>
nav.navbar.is-fixed-top {
  background: rgba(24, 24, 24, 0.99);
}

@media only screen and (min-width: 768px) {
  .nav {
    padding: 0.2rem 2rem;
  }
}
</style>
