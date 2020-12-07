<template>
  <div>
    <div class="container">
      <div class="title-anim-1 pos-left">
        <span><center>Welcome to</center></span>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="title-anim-2">
        <span>Machine</span>
      </div>
      <div class="title-anim-2bis">
        <span>learning</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.pos-left {
  padding-left: 3vw;
}
body {
  font-family: 'Quicksand', sans-serif;
  background-color: #141528;
  padding: 80px;
  text-align: center;
}

.container {
  display: inline-block;
  text-align: left;
  margin-bottom: 3px;
}

.title-anim,
.title-anim-1,
.title-anim-1bis,
.title-anim-2,
.title-anim-2bis {
  position: relative;
  display: inline-block;
  width: 350px;
  height: 100px;
  overflow: hidden;
}
.title-anim span,
.title-anim-1bis span,
.title-anim-2 span,
.title-anim-2bis span {
  position: absolute;
  text-transform: uppercase;
  font-size: 60px;
  color: white;
}
.title-anim-1 span {
  position: absolute;
  text-transform: uppercase;
  font-size: 45px;
  color: white;

  top: 100%;
  font-weight: 230;
  animation: 0.4s titleAnim 2s ease forwards;
}

.title-anim-1bis span {
  top: -100%;
  font-weight: 700;
  animation: 0.4s titleAnim 2.2s ease forwards;
}

.title-anim-2 {
  /* border: 1px solid white; */
  width: 280px;
  left: 80px;
  animation: 0.5s titleAnim2 4.9s ease forwards;
}
.title-anim-2 span {
  top: 100%;
  font-weight: 300;
  animation: 0.4s titleAnim 4s ease forwards;
}

.title-anim-2bis {
  width: 270px;
  /* border: 1px solid white; */
}
.title-anim-2bis span {
  top: 0;
  left: -100%;
  font-weight: 700;
  color: #f1d91f;
  animation: 0.4s titleAnim2 5s ease forwards;
}

@keyframes titleAnim {
  100% {
    top: 0;
  }
}
@keyframes titleAnim2 {
  100% {
    left: 0;
  }
}

@media only screen and (max-width: 768px) {
  .title-anim-2 {
    /* border: 1px solid white; */
    /* width: 200px; */
    width: 40vw;
    left: 80px;
    animation: 0.5s titleAnim2 4.9s ease forwards;
  }
  .title-anim-2bis {
    /* width: 200px; */
    width: 40vw;
    /* border: 1px solid white; */
  }
  .title-anim span,
  .title-anim-1bis span,
  .title-anim-2 span,
  .title-anim-2bis span {
    position: absolute;
    text-transform: uppercase;
    font-size: 6vw;
    color: white;
    width: 80%;
    /* border: 1px solid red; */
  }
  .title-anim-1 span {
    position: relative;
    text-transform: uppercase;
    font-size: 5vw;
    color: white;
    /* border: 1px solid green; */

    top: 100%;
    font-weight: 230;
    animation: 0.4s titleAnim 2s ease forwards;
  }
  .title-anim-2bis span {
    top: 0;
    left: -100%;
    font-weight: 700;
    padding-left: 1vw;
    color: #f1d91f;
    animation: 0.4s titleAnim2 5s ease forwards;
  }
  .title-anim,
  .title-anim-1bis,
  .title-anim-2,
  .title-anim-2bis {
    position: relative;
    display: inline-block;
    width: 30vw;
    height: 100px;
    /* border: 1px solid pink; */
    overflow: hidden;
  }
  .title-anim-1 {
    position: relative;
    display: inline-block;
    width: auto;
    height: 100px;

    /* border: 1px solid white; */
    overflow: hidden;
  }
  .pos-left {
    padding-left: 0;
  }
}
</style>
