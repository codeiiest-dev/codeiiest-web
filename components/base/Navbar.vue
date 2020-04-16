<template>
  <b-navbar :fixed-top=true :transparent=true :spaced=true class="is-dark">
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
export default {
  data(){
    return{

    }
  },
  methods:{
    handleLogin(){

    },
    handleSignUp(){

    }
  }
}
</script>