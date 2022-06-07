<template>
  <div class="worldBlock">
    <letter-block-component
      v-for="(letter, index) in word"
      :key="index"
      :letter="letter"
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
