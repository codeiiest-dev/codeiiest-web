<template>
    <div>
        <section class="hero is-primary is-fullheight">
            <div class="hero-body">
                <div class="container">
                <h1 class="title is-size-3 has-text-centered">
                    {{title}}
                </h1>
                <h2 class="subtitle has-text-centered">
                    {{subtitle}}
                </h2>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default{
    data(){
        return{
            title:"CodeIIEST",
            subtitle:"The best club in the world."
        }
    }
}
</script>