<template>
  <div v-show="getFinishGame">
    <h2 class="palyAgainMessage">
      <i :class="classObject">{{
        getGameResult ? "Gratulacje, " : "No niestety, "
      }}</i>
      {{ getGameResult ? "udało Ci się!" : "może innym razem." }}
    </h2>
    <restart-game-button :win="getGameResult" />
  </div>
</template>

<script>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "@/stores/MainStore";
import RestartGameButton from "@/components/RestartGameButton.vue";

export default {
  name: "PlayAgain",
  components: { RestartGameButton },
  setup() {
    const { getFinishGame, getGameResult } = storeToRefs(useMainStore());

    const classObject = computed(() => ({
      displayInlineBlock: true,
      animate__animated: true,
      animate__tada: getGameResult.value,
      animate__flash: !getGameResult.value,
      winGame: getGameResult.value,
      lostGame: !getGameResult.value,
    }));

    return { getFinishGame, getGameResult, classObject };
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
