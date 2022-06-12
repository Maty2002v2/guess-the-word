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
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";

import { useMainStore } from "@/stores/MainStore";

import LetterBlockComponent from "@/components/LetterBlockComponent.vue";

export default {
  name: "WordBlockComponent",
  components: { LetterBlockComponent },
  props: {
    lineNumber: {
      type: Number,
    },
    word: {
      type: String,
    },
  },
  setup(props, { emit }) {
    let userWord = ref("");

    const { getFinishGame } = storeToRefs(useMainStore());
    const { finishGame, changeGameResult } = useMainStore();

    watch(getFinishGame, (newFinishGame) => {
      if (!newFinishGame) {
        userWord.value = "";
      }
    });

    function saveUserWord(event) {
      userWord.value += event.target.value.toLowerCase();
    }

    function completeWord() {
      if (userWord.value === props.word) {
        finishGame();
        changeGameResult(true);
        return;
      }
      emit("completeWord");
    }

    return { saveUserWord, completeWord, userWord };
  },
};
</script>
