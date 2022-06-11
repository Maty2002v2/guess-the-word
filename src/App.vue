<template>
  <div class="container">
    <board-game-component></board-game-component>
    <play-again-component></play-again-component>
    <tip-container-component></tip-container-component>
  </div>
</template>

<script>
import "@/styles/globalStyles.css";
import boardGameComponent from "./components/boardGameComponent.vue";
import playAgainComponent from "./components/playAgainComponent.vue";
import tipContainerComponent from "./components/tip/tipContainerComponent.vue";

export default {
  name: "App",
  components: {
    boardGameComponent,
    playAgainComponent,
    tipContainerComponent,
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
