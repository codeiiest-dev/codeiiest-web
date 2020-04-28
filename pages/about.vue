<template>
    <div class="hero is-dark is-fullheight">
        <div class="container section">
            <div class="container">
                <h1 class="is-size-2 has-text-centered">
                    Want to know about us?
                </h1>
                <p class="is-size-5 js">
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
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non recusandae nobis saepe magnam voluptatem sapiente rem quisquam dolorem, ullam eos dolorum eaque aperiam, reprehenderit ad. Eius animi dignissimos cupiditate tempore nesciunt molestiae fugiat eligendi voluptas! Sed fugit quis magnam nobis quaerat ab ad amet ea accusamus libero. Autem natus perspiciatis voluptatum repellat non! Dolor dignissimos ab repellendus, iure totam blanditiis incidunt, aspernatur optio nobis temporibus debitis deleniti quibusdam voluptate natus velit tempore quidem alias, vero similique perferendis beatae? Rerum necessitatibus repellat quis! Impedit, corporis sit iste neque quo placeat adipisci, error sapiente rerum ipsum ducimus similique quia ipsam libero'
        }
    }
}
</script>

<style scoped>
.js{
    text-align: justify;
    text-justify: auto;
}
</style>