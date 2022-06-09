<template>
  <div class="boardGame" v-if="readyToRender">
    <h1 class="category">
      Kategoria: <i>{{ word.category }}</i>
    </h1>
    <word-block-component
      v-for="x in 5"
      :key="x"
      :yourTurnFlag="counterOfCompletedLines === x"
      :word="word.word"
      @complete-word="nextLineOfWord"
    ></word-block-component>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUpdated } from "vue";
import { storeToRefs } from "pinia";
import { useWordsStore } from "@/stores/WordsStore";
import wordBlockComponent from "./wordBlockComponent.vue";

export default {
  name: "boardGameComponent",
  components: { wordBlockComponent },
  setup() {
    let wordBlockComponentsArray = reactive({ value: [] });
    let counterOfCompletedLines = ref(0);
    let readyToRender = ref(false);

    const { word, dataIsDownloaded } = storeToRefs(useWordsStore());
    const { fetchPosts } = useWordsStore();

    onMounted(() => {
      fetchPosts()
        .then(() => {
          readyToRender.value = true;
        })
        .then(() => {
          setFocus();
        });
    });

    onUpdated(() => {
      wordBlockComponentsArray.value = document.querySelectorAll(".wordBlock");
    });

    function setFocus() {
      wordBlockComponentsArray.value[
        counterOfCompletedLines.value
      ].firstElementChild.firstElementChild.focus();
    }

    function nextLineOfWord() {
      counterOfCompletedLines.value++;
      if (
        counterOfCompletedLines.value < wordBlockComponentsArray.value.length
      ) {
        setFocus();
      }
    }

    return {
      word,
      counterOfCompletedLines,
      nextLineOfWord,
      readyToRender,
      dataIsDownloaded,
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
