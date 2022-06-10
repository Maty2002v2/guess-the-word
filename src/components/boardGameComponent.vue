<template>
  <div class="boardGame" v-if="wordObject">
    <h1 class="category">
      Kategoria: <i>{{ getCategpry }}</i>
    </h1>
    <word-block-component
      v-for="(x, index) in 5"
      :key="x"
      :lineNumber="index"
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
import wordBlockComponent from "./wordBlockComponent.vue"; //Poprawić i albo wszedzie sciezki katologow albo @
//dodać loader na plansze (kiedy slowo sie pobiera)

export default {
  name: "boardGameComponent",
  components: { wordBlockComponent },
  setup() {
    const wordBlockComponentsArray = ref([]);
    let activeLineNumber = ref(0);
    let counterOfCompletedLines = ref(0);

    const { getFinishGame } = storeToRefs(useMainStore());
    const { finishGame } = useMainStore();

    const { getWord, getCategpry, wordObject } = storeToRefs(useWordsStore());
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
      wordObject,
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
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
