<template>
  <button
    class="restart-button"
    :class="[win ? 'winButton' : 'lostButotn']"
    @click="restart"
  >
    Jeszcze raz
  </button>
</template>

<script>
import { useMainStore } from "@/stores/MainStore"; //TODO: pomyslec czy nie zmienic restart na reset (wszedzie)
import { useWordsStore } from "@/stores/WordsStore"; //class="animate__animated animate__bounce"

export default {
  name: "RestartGameButton",
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
.restart-button {
  padding: 8px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;

  background: transparent;

  font-weight: bold;

  cursor: pointer;
  transition: all 0.1s ease-in;
}

.restart-button:hover {
  transform: scale(0.9);
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
