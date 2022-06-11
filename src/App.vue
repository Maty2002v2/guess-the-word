<template>
  <div class="container">
    <board-game-component></board-game-component>
    <play-again-component></play-again-component>
    <tip-box-component v-show="tipAvailable"></tip-box-component>
  </div>
</template>

<script>
import "@/styles/globalStyles.css";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useMainStore } from "@/stores/MainStore";
import boardGameComponent from "./components/boardGameComponent.vue";
import playAgainComponent from "./components/playAgainComponent.vue";
import tipBoxComponent from "./components/tip/tipBoxComponent.vue";

export default {
  name: "App",
  components: {
    boardGameComponent,
    playAgainComponent,
    tipBoxComponent,
  },
  setup() {
    const { getFinishGame, getNumberOfTipsAvailable } = storeToRefs(
      useMainStore()
    );

    const tipAvailable = computed(() => {
      return !getFinishGame.value && getNumberOfTipsAvailable.value > 0;
    });

    return { tipAvailable };
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
