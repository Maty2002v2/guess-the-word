<template>
  <div
    class="container"
    :class="[wordObject ? 'show' : 'hide']"
    style="transition: opacity 0.5s linear"
  >
    <div>
      <board-game></board-game>
      <play-again></play-again>
      <tip-container></tip-container>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useWordsStore } from "@/stores/WordsStore";
import { useGlobalWatchs } from "@/stores/GlobalWatchs";

import BoardGame from "@/components/TheBoardGame.vue";
import PlayAgain from "@/components/PlayAgain.vue";
import TipContainer from "@/components/tip/TipContainer.vue";

import "animate.css";
import "@/styles/globalStyles.css";

export default {
  name: "App",
  components: {
    BoardGame,
    PlayAgain,
    TipContainer,
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
}

.show {
  opacity: 1;
}

.hide {
  opacity: 0;
}
</style>
