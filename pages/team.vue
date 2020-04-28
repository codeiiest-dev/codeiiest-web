<template>
    <div>
        <div class="section">
            <div class="container has text-centered">
                <h1 class="is-size-2 has-text-centered">
                    {{header.title}}
                </h1>
                <p class="has-text-centered is-size-4 sub1">
                    {{header.subtitle}}
                </p>
            </div>
        </div>
        <div class="hero has-background-dark">
            <div class="hero-body container">
                <div class="tile is-ancestor center">
                    <div v-for="(item,index) in team" :key="index" class="tile is-4 is-vertical is-parent has-background-dark">
                        <div class="tile is-child box">
                            <figure class="image">
                                <img :src="item.url">
                            </figure>
                            <h1 class="is-size-3 has-text-centered has-text-danger">
                                {{ item.name }}
                            </h1>
                            <p class="is-size-4 has-text-centered">
                                {{ item.role }}
                            </p>
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
            header:{
                title:"Our Team",
                subtitle:"CodeIIEST is lucky to have a dedicated team working hard for the betterment of everyone. Let's go on a trip to know a bit about each of them."
            },
            team:[
                {
                    name: 'Dwaipayan Ray',
                    role: 'Boss',
                    url: '/images/Dwai.jpeg'
                },
                {
                    name: 'Shivam Singh',
                    role: 'Boss 2',
                    url: '/images/Shivam.jpeg'
                }
            ]
        }
    }
}
</script>

<style scoped>
.sub1{
    padding: 1vh 10vw;
}
.box{
    min-height: 25rem!important;
}
img {
    object-fit: contain;
    width: 100%;
    max-height: 15rem;
}
.center{
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>