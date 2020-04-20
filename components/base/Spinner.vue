<template>
<div class="hero is-dark is-fullheight" v-if="loading">
    <div class="container">
        <div class="columns is-fullheight">
            <div class="column is-narrow is-vertical-center is-centered has-text-centered">
                <div class="semipolar-spinner" :style="spinnerStyle">
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="ring"></div>
                </div>
                <h1 class="is-size-3">
                    Code IIEST
                </h1>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.semipolar-spinner, .semipolar-spinner * {
    box-sizing: border-box;
}

.semipolar-spinner {
    height: 65px;
    width: 65px;
    position: relative;
}

.semipolar-spinner .ring {
    border-radius: 50%;
    position: absolute;
    border: calc(65px * 0.05) solid transparent;
    border-top-color: #ff1d5e;
    border-left-color: #ff1d5e;
    animation: semipolar-spinner-animation 2s infinite;
}

.semipolar-spinner .ring:nth-child(1) {
    height: calc(65px - 65px * 0.2 * 0);
    width: calc(65px - 65px * 0.2 * 0);
    top: calc(65px * 0.1 * 0);
    left: calc(65px * 0.1 * 0);
    animation-delay: calc(2000ms * 0.1 * 4);
    z-index: 5;
}

.semipolar-spinner .ring:nth-child(2) {
    height: calc(65px - 65px * 0.2 * 1);
    width: calc(65px - 65px * 0.2 * 1);
    top: calc(65px * 0.1 * 1);
    left: calc(65px * 0.1 * 1);
    animation-delay: calc(2000ms * 0.1 * 3);
    z-index: 4;
}

.semipolar-spinner .ring:nth-child(3) {
    height: calc(65px - 65px * 0.2 * 2);
    width: calc(65px - 65px * 0.2 * 2);
    top: calc(65px * 0.1 * 2);
    left: calc(65px * 0.1 * 2);
    animation-delay: calc(2000ms * 0.1 * 2);
    z-index: 3;
}

.semipolar-spinner .ring:nth-child(4) {
    height: calc(65px - 65px * 0.2 * 3);
    width: calc(65px - 65px * 0.2 * 3);
    top: calc(65px * 0.1 * 3);
    left: calc(65px * 0.1 * 3);
    animation-delay: calc(2000ms * 0.1 * 1);
    z-index: 2;
}

.semipolar-spinner .ring:nth-child(5) {
    height: calc(65px - 65px * 0.2 * 4);
    width: calc(65px - 65px * 0.2 * 4);
    top: calc(65px * 0.1 * 4);
    left: calc(65px * 0.1 * 4);
    animation-delay: calc(2000ms * 0.1 * 0);
    z-index: 1;
}

@keyframes semipolar-spinner-animation {
    50% {
    transform: rotate(360deg) scale(0.7);
    }
}
.is-vertical-center {
  display: flex;
  align-items: center;
}
.columns {
    display: flex;
    flex-direction: row; 
}
</style>

<style lang="sass" scoped>
$navbar-height: 10rem;

.columns
  &.is-fullheight
    min-height: calc(100vh - ( #{$navbar-height} - .75rem ) )
    max-height: calc(100vh - ( #{$navbar-height} - .75rem ) )
    height: calc(100vh - ( #{$navbar-height} - .75rem ) )
    display: flex
    flex-direction: row
    justify-content: stretch
    .column
      overflow-y: auto
</style>
<script>
export default {
    data:()=>({
        loading: false
    }),
    layout: 'empty',
    methods:{
        start(){
            this.loading=true;
        },
        finish(){
            this.loading=false;
        }
    }

}
</script>