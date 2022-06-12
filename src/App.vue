<template>
  <div
    class="container"
    :class="[wordObject ? 'show' : 'hide']"
    style="transition: opacity 0.5s linear"
  >
    <div>
      <board-game-component></board-game-component>
      <play-again-component></play-again-component>
      <tip-container-component></tip-container-component>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useWordsStore } from "@/stores/WordsStore";
import { useGlobalWatchs } from "@/stores/GlobalWatchs";

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
  setup() {
    useGlobalWatchs();
    const { wordObject } = storeToRefs(useWordsStore());

    return { wordObject };
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

.show {
  opacity: 1;
}

.hide {
  opacity: 0;
}
</style>
