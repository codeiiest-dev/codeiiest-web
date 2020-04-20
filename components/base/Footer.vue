<template>
    <footer class="footer has-background-dark">
        <div class="container section">
            <div class="columns is-centered has-text-centered">
                <div class="column is-3">
                    <div class="content">
                        <h1 class="title has-text-white">
                            Code - IIEST
                        </h1>
                        <p class="subtitle has-text-grey-light">
                            ©codeiiest 2020
                        </p>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="container">
                        <ul class="is-size-5 has-text-weight-bold">
                            <li v-for="(item,index) in sitelinks" :key="index">
                                <nuxt-link :to="item.to" >
                                    {{ item.sub }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="container">
                        <p class="is-size-3 has-text-weight-bold has-text-centered has-text-white">
                            Social Links:
                        </p>
                        <div class="level">
                            <div class="level-item" v-for="(item,index) in sociallinks" :key="index">
                                <a :href="item.link">
                                    <font-awesome-icon :icon="['fab',item.icon]" size="3x" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            sitelinks:[
            {
                sub: 'Our Team',
                to: '/team'
            },
            {
                sub: 'About us',
                to: '/about'
            },
            {
                sub: 'Contact us',
                to: '/contact'
            }
            ],
            sociallinks:[
                {
                    link:'#',
                    icon: 'linkedin'
                },
                {
                    link:'#',
                    icon: 'github',
                },
                {
                    link:'#',
                    icon: 'facebook'
                }
            ]
        }
    }
}
</script>

<style scoped>
.footer{
    border-top: 1px solid black;
}
</style>