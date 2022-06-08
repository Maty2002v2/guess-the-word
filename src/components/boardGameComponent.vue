<template>
  <div class="boardGame" v-if="loading">
    <h1 class="category">Kategoria: {{ wordObject.data.category }}</h1>
    <word-block-component
      v-for="x in 3"
      :key="x"
      :yourTurnFlag="counterOfCompletedLines === x"
      :word="wordObject.data.word"
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
    let wordObject = reactive({ data: "" });
    let wordBlockComponentsArray = reactive({ value: [] });
    let counterOfCompletedLines = ref(0);
    let loading = ref(false);

    onMounted(() => {
      fetchData();
    });

    function fetchData() {
      fetch("http://matikster1.ct8.pl")
        .then((response) => response.json())
        .then((response) => {
          wordObject.data = response;
          loading.value = true;
        })
        .then(() => {
          wordBlockComponentsArray.value =
            document.querySelectorAll(".wordBlock");
          setFocus();
        })
        .catch((err) => console.error(err));
    }

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
      wordObject,
      counterOfCompletedLines,
      nextLineOfWord,
      loading,
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
