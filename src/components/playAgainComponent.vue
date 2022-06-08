<template>
  <div>
    <h2>
      <i :class="[win ? 'winGame' : 'lostGame']">{{
        win ? "Gratulacje, " : "No niestety, "
      }}</i>
      {{ win ? "udało Ci się!" : "może innym razem." }}
    </h2>
    <button-restart-game :win="win" />
  </div>
</template>

<script>
import buttonRestartGame from "./buttonRestartGame.vue";

export default {
  components: { buttonRestartGame },
  name: "playAgaonComponent",
  props: {
    win: {
      type: Boolean,
    },
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
