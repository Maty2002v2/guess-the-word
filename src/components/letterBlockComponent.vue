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
    let value = ref("");

    function thisIsLetter(value) {
      const codePolishLetters = [
        260, 262, 280, 321, 323, 211, 346, 377, 379, 261, 263, 281, 322, 324,
        243, 347, 378, 380,
      ];

      if (
        (value >= 65 && value <= 90) ||
        (value >= 97 && value <= 122) ||
        codePolishLetters.find((el) => el === value)
      ) {
        return true;
      }
      return false;
    }

    function goToTheNextLetter(event) {
      const firstChild = event.target.parentNode.nextSibling.firstChild;

      if (thisIsLetter(event.data.charCodeAt(0))) {
        emit("press", event);
        event.target.disabled = true;
        if (firstChild) {
          firstChild.focus();
        } else {
          emit("completeWord");
        }
      } else {
        value.value = "";
      }
    }

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
