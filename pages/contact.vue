<template>
    <div class="hero is-fullheight">
        <div class="container section">
            <div class="container has-margin-bottom-2">
                <h1 class="is-size-3 has-text-centered">
                    Contact Us
                </h1>
            </div>
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-4">
                        <div class="card  has-background-indigo">
                            <div class="card-content has-text-white">
                                <div v-for="(item,index) in contact" :key="index">
                                    <h1 class="is-size-4">
                                        {{ item.title }}
                                    </h1>
                                    <p class="is-size-5">
                                        {{ item.content }}
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="column is-7">
                        <div class="card has-background-indigo">
                            <div class="card-content has-text-white">
                                <div class="content">
                                    <h1 class="is-size-3 has-text-centered has-text-white"> Reach us directly </h1>
                                </div>
                                <section class="field">
                                    <p class="is-size-5 has-text-weight-bold">Name</p>
                                    <b-field>
                                        <b-input 
                                            placeholder="John"
                                            v-model="name"></b-input>
                                    </b-field>

                                    <p class="is-size-5 has-text-weight-bold">Email</p>
                                    <b-field
                                        :type="[validemail()?'':'is-danger']"
                                        :message="[validemail()?'':'This email is invalid']">
                                        <b-input type="email"
                                            placeholder="john@example.com"
                                            maxlength="30"
                                            v-model="email"
                                            >
                                        </b-input>
                                    </b-field>

                                    <p class="is-size-5 has-text-weight-bold">Message</p>
                                    <b-field>
                                        <b-input 
                                        v-model="message" maxlength="200" 
                                        placeholder="Your message"
                                        type="textarea"></b-input>
                                    </b-field>
                                    <b-field>
                                        <p class="control">
                                            <button class="button is-danger" @click.prevent="submit">
                                                Submit 
                                            </button>
                                        </p>
                                    </b-field>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contact:[
                {
                    title: "Get in Touch",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos delectus qui dolorum aliquid. Non voluptatem magni sapiente unde obcaecati quaerat animi! Veniam exercitationem omnis iste doloribus, nostrum laboriosam odio."
                },
                {
                    title: "Address",
                    content: "IIEST Shibpur, Howrah 711103, West Bengal"
                },
                {
                    title: "Email",
                    content: "codeiiest@gmail.com"
                }
            ],
            name: '',
            email: '',
            message: ''
        }
    },
    methods
    :{
        validemail(){
            return false;
        },
        submit(){

        }
    },
    loading:false,
    mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>

<style scoped>
.card{
    border-radius: 1rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.card:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.has-margin-bottom-2{
    margin-bottom: 2rem;
}
.has-background-indigo{
    background-color:#3B5998;
}
</style>