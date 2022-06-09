<template>
  <div class="boardGame" v-if="wordObject">
    <h1 class="category">
      Kategoria: <i>{{ getCategpry }}</i>
    </h1>
    <word-block-component
      v-for="x in 5"
      :key="x"
      :yourTurnFlag="counterOfCompletedLines === x"
      :word="getWord"
      @complete-word="nextLineOfWord"
    ></word-block-component>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUpdated } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "@/stores/MainStore";
import { useWordsStore } from "@/stores/WordsStore";
import wordBlockComponent from "./wordBlockComponent.vue"; //Poprawić i albo wszedzie sciezki katologow albo @
//dodać loader na plansze (kiedy slowo sie pobiera)
export default {
  name: "boardGameComponent",
  components: { wordBlockComponent },
  setup() {
    let wordBlockComponentsArray = reactive({ value: [] });
    let counterOfCompletedLines = ref(0);

    const { changeFinishGame } = useMainStore();

    const { getWord, getCategpry, wordObject } = storeToRefs(useWordsStore());
    const { fetchWord } = useWordsStore();

    onMounted(() => {
      fetchWord();
    });

    onUpdated(() => {
      if (document.querySelectorAll(".wordBlock").length) {
        wordBlockComponentsArray.value =
          document.querySelectorAll(".wordBlock");
        if (
          counterOfCompletedLines.value < wordBlockComponentsArray.value.length
        ) {
          setFocus();
        }
      }
    });

    function setFocus() {
      wordBlockComponentsArray.value[
        counterOfCompletedLines.value
      ].firstElementChild.firstElementChild.focus();
    }

    function nextLineOfWord() {
      counterOfCompletedLines.value++;

      if (
        counterOfCompletedLines.value === wordBlockComponentsArray.value.length
      ) {
        changeFinishGame();
      }
    }

    return {
      getWord,
      getCategpry,
      wordObject,
      counterOfCompletedLines,
      nextLineOfWord,
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
