<template>
  <div class="boardGame">
    <h1 class="category">
      Kategoria: <i>{{ getCategpry }}</i>
    </h1>
    <word-block-component
      v-for="(numberEl, index) in 5"
      :key="numberEl"
      :line-number="index"
      :data-lineNumber="index"
      :word="getWord"
      @complete-word="nextLineOfWord"
      @line-change="lineChange"
    ></word-block-component>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";

import { useMainStore } from "@/stores/MainStore";
import { useWordsStore } from "@/stores/WordsStore";

import WordBlockComponent from "@/components/WordBlockComponent.vue";

export default {
  name: "TheBoardGameComponent",
  components: { WordBlockComponent },
  setup() {
    const wordBlockComponentsArray = ref([]);
    let activeLineNumber = ref(0);
    let counterOfCompletedLines = ref(0);

    const { getFinishGame } = storeToRefs(useMainStore());
    const { finishGame } = useMainStore();

    const { getWord, getCategpry } = storeToRefs(useWordsStore());
    const { fetchWord } = useWordsStore();

    onMounted(() => {
      fetchWord()
        .then(
          () =>
            (wordBlockComponentsArray.value = [
              ...document.querySelectorAll(".wordBlock"),
            ])
        )
        .then(() => setFocus());
    });

    watch(getFinishGame, (newFinishGame) => {
      if (!newFinishGame) {
        restart();
      }
    });

    function setFocus() {
      if (counterOfCompletedLines.value > 0) {
        wordBlockComponentsArray.value[activeLineNumber.value] = null;

        const nextTarget = wordBlockComponentsArray.value.find(
          (el) => el !== null
        );

        activeLineNumber.value = parseInt(nextTarget.dataset.linenumber);

        nextTarget.firstElementChild.firstElementChild.focus();
      } else {
        wordBlockComponentsArray.value[0].firstElementChild.firstElementChild.focus();
      }
    }

    function nextLineOfWord() {
      counterOfCompletedLines.value++;

      if (counterOfCompletedLines.value === 5) {
        finishGame();
      } else {
        setFocus();
      }
    }

    function lineChange(lineNumber) {
      activeLineNumber.value = lineNumber;
    }

    function restart() {
      wordBlockComponentsArray.value = [
        ...document.querySelectorAll(".wordBlock"),
      ];
      activeLineNumber.value = 0;
      counterOfCompletedLines.value = 0;
      setFocus();
    }

    return {
      getWord,
      getCategpry,
      nextLineOfWord,
      lineChange,
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
