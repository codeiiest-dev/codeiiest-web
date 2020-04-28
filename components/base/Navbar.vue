<template>
  <b-navbar :fixed-top=true :transparent=true class="is-dark nav">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h2 class="title is-size-4 has-text-light">CodeIIEST</h2>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="div">
        <b-navbar-item tag="router-link" to="/" class="has-text-grey-light">
            Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/team" class="has-text-grey-light">
            Team
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/about" class="has-text-grey-light">
            About Us
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/contact" class="has-text-grey-light">
            Contact
        </b-navbar-item>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a @click="handleLogin" class="button is-primary">
            Login
          </a>
          <a @click="handleSignUp" class="button is-white">
            SignUp 
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import LoginCard from '~/components/authentication/LoginCard.vue';

export default {
  data(){
    return{

    }
  },
  methods:{
    handleLogin(){
      this.$buefy.modal.open({
        parent: this,
        component: LoginCard,
        hasModalCard: true,
        trapFocus: true
      })
    },
    handleSignUp(){

    }
  }
}
</script>

<style scoped>
nav.navbar.is-fixed-top {
  background: rgba(24,24,24,0.99);
}

@media only screen and (min-width: 768px) {
 .nav{
    padding: 0.2rem 2rem;
  }
}
</style>
