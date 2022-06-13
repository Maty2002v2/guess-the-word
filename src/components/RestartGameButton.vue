<template>
  <button :class="classObject" @click="restart">Jeszcze raz</button>
</template>

<script>
import { computed } from "vue";
import { useMainStore } from "@/stores/MainStore"; //TODO: pomyslec czy nie zmienic restart na reset (wszedzie)
import { useWordsStore } from "@/stores/WordsStore";

export default {
  name: "RestartGameButton",
  props: {
    win: {
      type: Boolean,
    },
  },
  setup(props) {
    const { restartGame } = useMainStore();
    const { fetchWord } = useWordsStore();

    const classObject = computed(() => ({
      "restart-button": true,
      winButton: props.win,
      lostButton: !props.win,
    }));

    function restart() {
      fetchWord().then(() => restartGame()); //lub state.$reset
    }

    return { classObject, restart };
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

.lostButton {
  color: #2c3e50;
  background: #c6c4c4;
}
</style>
