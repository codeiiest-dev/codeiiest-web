<template>
    <div class="hero is-dark is-fullheight">
        <div class="container section">
            <div class="container">
                <h2 class="has-text-centered"> About  <span class="headtext">CodeIIEST </span></h2>
                <h1 class="is-size-2 has-text-centered">
                     Who we are.
                </h1>
                <p class="js">
                    {{ about }}
                </p>    
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            about: 'CodeIIEST is one of the newest clubs of Indian Institute of Engineering Science and Technology, Shibpur. Formed in November, 2014 , the club has been actively involved in cultivating comprehensive skills in computer science among the students. The club consists of various enthusiasts and is a wonderful hub for a plethora of informative and interactive sessions. The students keep themselves updated with the emerging technologies, which further help them enhance and brush up their skills and enhance creativity and innovation.'
        }
    }
}
</script>

<style scoped>
.is-size-2{
    color: lightyellow;
    margin-bottom: 1rem;
}
.js{
    text-align: center;
    font-size: 1.2rem;
    line-height: 2;
    max-width: 38em;
    margin: auto;
    padding: 13px;
}
.headtext{
    color: red;
    font-size: 1.2rem;
    border-bottom: 2px solid currentColor;
}
</style>
