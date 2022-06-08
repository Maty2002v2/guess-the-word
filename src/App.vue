<template>
  <div class="container">
    <boardGameComponent />
    <playAgainComponent :win="true" />
  </div>
</template>

<script>
import "@/styles/globalStyles.css";
import boardGameComponent from "./components/boardGameComponent.vue";
import playAgainComponent from "./components/playAgainComponent.vue";

export default {
  name: "App",
  components: {
    boardGameComponent,
    playAgainComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* width: 100vw; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
