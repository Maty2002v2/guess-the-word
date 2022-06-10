<template>
  <button :class="[win ? 'winButton' : 'lostButotn']" @click="restart">
    Jeszcze raz
  </button>
</template>

<script>
import { useMainStore } from "@/stores/MainStore"; //pomyslec czy nie zmienic restart na reset (wszedzie)
import { useWordsStore } from "@/stores/WordsStore";

export default {
  name: "buttonRestartGame",
  props: {
    win: {
      type: Boolean,
    },
  },
  setup() {
    const { restartGame } = useMainStore();
    const { fetchWord } = useWordsStore();

    function restart() {
      fetchWord().then(() => restartGame()); //lub state.$reset
    }

    return { restart };
  },
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 5px;
}

.winButton {
  color: #2c3e50;
  background: #42b983;
}

.lostButotn {
  color: #2c3e50;
  background: #c6c4c4;
}
</style>
