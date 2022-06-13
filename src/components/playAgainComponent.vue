<template>
  <div v-show="getFinishGame">
    <h2 class="palyAgainMessage">
      <i
        class="displayInlineBlock animate__animated animate__tada"
        :class="[getGameResult ? 'winGame' : 'lostGame']"
        >{{ getGameResult ? "Gratulacje, " : "No niestety, " }}</i
      >
      {{ getGameResult ? "udało Ci się!" : "może innym razem." }}
    </h2>
    <restart-game-button :win="getGameResult" />
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useMainStore } from "@/stores/MainStore";
import RestartGameButton from "@/components/RestartGameButton.vue";

export default {
  name: "PlayAgaonComponent",
  components: { RestartGameButton },
  setup() {
    const { getFinishGame, getGameResult } = storeToRefs(useMainStore());

    return { getFinishGame, getGameResult };
  },
};
</script>

<style scoped>
.palyAgainMessage {
  margin-top: 60px;
  color: #ffffff;
}

.winGame {
  color: #42b983;
}

.lostGame {
  color: #c6c4c4;
}

.displayInlineBlock {
  display: inline-block;
}
</style>
