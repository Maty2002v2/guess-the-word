<template>
  <div class="boardGame">
    <word-block-component
      v-for="x in 3"
      :key="x"
      :yourTurnFlag="counterOfCompletedLines === x"
      :word="word"
      @complete-word="nextLineOfWord"
    ></word-block-component>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import wordBlockComponent from "./wordBlockComponent.vue";

export default {
  name: "boardGameComponent",
  components: { wordBlockComponent },
  setup() {
    let word = "ptasznik";
    let wordBlockComponentsArray = reactive([]);
    let counterOfCompletedLines = ref(0);

    onMounted(() => {
      wordBlockComponentsArray = document.querySelectorAll(".wordBlock");
      wordBlockComponentsArray[
        counterOfCompletedLines.value
      ].firstElementChild.firstElementChild.focus();
    });

    function nextLineOfWord() {
      counterOfCompletedLines.value++;

      if (counterOfCompletedLines.value < wordBlockComponentsArray.length) {
        wordBlockComponentsArray[
          counterOfCompletedLines.value
        ].firstElementChild.firstElementChild.focus();
      }
    }

    return { word, counterOfCompletedLines, nextLineOfWord };
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
