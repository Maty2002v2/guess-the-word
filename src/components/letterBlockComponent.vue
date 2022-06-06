<template>
  <div>
    <input type="text" :disabled="disabledFlag" ref="input" />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "letterBlockComponent",
  props: {
    letter: {
      type: String,
    },
    focusFlag: {
      type: Boolean,
    },
    disabledFlag: {
      type: Boolean,
    },
  },
  setup(props) {
    const input = ref(null);
    watch(
      () => props.focusFlag,
      (first, second) => {
        input.value.focus();
        first, second;
      }
    );

    return { input };
  },
};
</script>

<style scoped>
div {
  display: inline-block;
}
</style>
