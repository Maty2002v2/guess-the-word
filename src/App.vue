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

import BoardGameComponent from "@/components/TheBoardGameComponent.vue";
import PlayAgainComponent from "@/components/PlayAgainComponent.vue";
import TipContainerComponent from "@/components/tip/TipContainerComponent.vue";

import "animate.css";
import "@/styles/globalStyles.css";

export default {
  name: "App",
  components: {
    BoardGameComponent,
    PlayAgainComponent,
    TipContainerComponent,
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
