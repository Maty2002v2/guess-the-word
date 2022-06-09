<template>
  <div class="wordBlock">
    <letter-block-component
      v-for="(letter, index) in word"
      :key="index"
      :letter="letter"
      @press="saveUserWord($event)"
      @complete-word="completeWord"
    ></letter-block-component>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMainStore } from "@/stores/MainStore";
import letterBlockComponent from "./letterBlockComponent.vue";

export default {
  components: { letterBlockComponent },
  name: "wordBlockComponent",
  props: {
    yourTurnFlag: {
      type: Boolean,
    },
    word: {
      type: String,
    },
  },
  setup(props, { emit }) {
    let userWord = ref("");

    const { changeFinishGame, changeGameResult } = useMainStore();

    function saveUserWord(event) {
      userWord.value += event.target.value;
    }

    function completeWord() {
      if (userWord.value === props.word) {
        changeFinishGame();
        changeGameResult(true);
      }
      emit("completeWord");
    }

    return { saveUserWord, completeWord };
  },
};
</script>

<style scoped></style>
