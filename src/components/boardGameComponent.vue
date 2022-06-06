<template>
  <div>
    <word-block-component
      :wordArray="lettersOfTheWordArray"
    ></word-block-component>
  </div>
</template>

<script>
import { ref } from "vue";
import wordBlockComponent from "./wordBlockComponent.vue";

export default {
  name: "boardGameComponent",
  components: { wordBlockComponent },
  setup() {
    let word = "vue";
    let lettersOfTheWordArray = ref([]);

    let i = 0;
    while (i < word.length) {
      lettersOfTheWordArray.value.push({
        letter: word.charAt(i),
        focus: false,
        disabled: false,
      });
      i++;
    }

    return { word, lettersOfTheWordArray };
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
