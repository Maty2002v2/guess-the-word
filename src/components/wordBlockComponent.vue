<template>
  <div>
    <letter-block-component
      v-for="(letter, index) in wordArrayCopy"
      :key="index"
      :letter="letter.letter"
      :focusFlag="letter.focus"
      :disabledFlag="letter.disabled"
      @input="goTonextLetter($event, index)"
    ></letter-block-component>
  </div>
</template>

<script>
import { reactive } from "vue";
import letterBlockComponent from "./letterBlockComponent.vue";

export default {
  components: { letterBlockComponent },
  name: "wordBlockComponent",
  props: {
    wordArray: {
      type: Array,
    },
  },
  setup(props) {
    const wordArrayCopy = reactive(props.wordArray);
    function goTonextLetter(event, index) {
      wordArrayCopy[index].disabled = true;
      wordArrayCopy[
        index + 1 < wordArrayCopy.length ? index + 1 : index
      ].focus = true;
    }

    return { goTonextLetter, wordArrayCopy };
  },
};
</script>
