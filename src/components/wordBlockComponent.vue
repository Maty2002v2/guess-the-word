<template>
  <div class="wordBlock">
    <letter-block-component
      v-for="(letter, index) in word"
      :key="index"
      :letter="letter"
      @complete-word="$emit('completeWord')"
    ></letter-block-component>
  </div>
</template>

<script>
import letterBlockComponent from "./letterBlockComponent.vue";

export default {
  components: { letterBlockComponent },
  name: "wordBlockComponent",
  props: {
    yourTurnFlag: {
      type: Boolean,
    },
    word: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
