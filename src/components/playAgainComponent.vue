<template>
  <div v-show="getFinishGame">
    <h2>
      <i :class="[getGameResult ? 'winGame' : 'lostGame']">{{
        getGameResult ? "Gratulacje, " : "No niestety, "
      }}</i>
      {{ getGameResult ? "udało Ci się!" : "może innym razem." }}
    </h2>
    <button-restart-game :win="getGameResult" />
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useMainStore } from "@/stores/MainStore";
import buttonRestartGame from "./buttonRestartGame.vue";

export default {
  components: { buttonRestartGame },
  name: "playAgaonComponent",
  setup() {
    const { getFinishGame, getGameResult } = storeToRefs(useMainStore());

    return { getFinishGame, getGameResult };
  },
};
</script>

<style scoped>
h2 {
  color: #ffffff;
  margin-top: 60px;
}

.winGame {
  color: #42b983;
}

.lostGame {
  color: #c6c4c4;
}
</style>
