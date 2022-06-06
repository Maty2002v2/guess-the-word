<template>
  <div>
    <letter-block-component
      v-for="letter in word"
      :key="letter"
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
    word: {
      type: String,
    },
  },
};
</script>
