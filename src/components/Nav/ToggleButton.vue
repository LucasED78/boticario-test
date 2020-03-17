<template>
  <div class="toggle__button" @click="toggleClickedHandler">
    <div class="first-line"></div>
    <div class="second-line"></div>
    <div class="third-line"></div>
  </div>
</template>

<script>
  export default {
    props: {
      toggleClickedHandler: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>
  .toggle__button {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: white;
    padding: 10px;
    transition: left .62s;
  }

  .first-line,
  .second-line,
  .third-line {
    width: 100%;
    height: 3px;
    background-color: black;
    position: relative;
    transition: transform 0.5s;
  }

  .second-line { margin: 10px 0; }

  .toggled .first-line {
    transform: rotateZ(45deg);
  }

  .toggled .second-line { display: none; }

  .toggled .third-line {
    transform: rotateZ(-45deg);
    bottom: 2px;
  }

  @media (min-width: 700px){
    .toggle__button { display: none; }
  }
</style>