<template>
  <div class="wordBlock">
    <letter-block-component
      v-for="(letter, index) in word"
      :key="index"
      :letter="letter"
      @press="saveUserWord($event)"
      @complete-word="completeWord"
      @click.prevent="$emit('lineChange', lineNumber)"
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
    lineNumber: {
      type: Number,
    },
    word: {
      type: String,
    },
  },
  setup(props, { emit }) {
    let userWord = ref("");

    const { finishGame, changeGameResult } = useMainStore();

    function saveUserWord(event) {
      userWord.value += event.target.value;
    }

    function completeWord() {
      console.log(userWord.value, props.word, "completeWord");
      if (userWord.value === props.word) {
        userWord.value = "";
        finishGame();
        changeGameResult(true);
        return;
      }
      emit("completeWord");
    }

    return { saveUserWord, completeWord };
  },
};
</script>

<style scoped></style>
