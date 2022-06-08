<template>
  <div>
    <input
      v-model="value"
      type="text"
      @input="goToTheNextLetter($event)"
      :class="{ goodAnswer: checkingTheLetter }"
      class="letterBlock"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "letterBlockComponent",
  props: {
    letter: {
      type: String,
    },
  },
  emits: ["completeWord"],
  setup(props, ctx) {
    function goToTheNextLetter(event) {
      event.target.disabled = true;
      if (event.target.parentNode.nextSibling.firstChild) {
        event.target.parentNode.nextSibling.firstChild.focus();
      } else {
        ctx.emit("completeWord");
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
div {
  /* display: inline-block; */
}

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
