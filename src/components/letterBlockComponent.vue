<template>
  <div>
    <input
      type="text"
      class="letterBlock"
      :class="{ goodAnswer: checkingTheLetter }"
      v-model="value"
      @input="goToTheNextLetter($event)"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "LetterBlockComponent",
  props: {
    letter: {
      type: String,
    },
  },
  emits: ["completeWord", "press"],
  setup(props, { emit }) {
    function goToTheNextLetter(event) {
      emit("press", event);
      event.target.disabled = true;
      if (event.target.parentNode.nextSibling.firstChild) {
        event.target.parentNode.nextSibling.firstChild.focus();
      } else {
        emit("completeWord");
      }
    }

    let value = ref("");

    const checkingTheLetter = computed(() => {
      return value.value.toLowerCase() == props.letter;
    });

    return { value, checkingTheLetter, goToTheNextLetter };
  },
};
</script>

<style scoped>
input[type="text"] {
  border: none;
  border-radius: 4px;
}

input[type="text"]:disabled {
  background: #f0f0f0;
}

.goodAnswer {
  background: #42b983 !important;
  color: #ffffff;
}
</style>
