<template>
  <div>
    <input type="text" :value="letter" />
  </div>
</template>

<script>
export default {
  name: "letterBlockComponent",
  props: {
    letter: {
      type: String,
    },
  },
};
</script>

<style scoped>
div {
  display: inline-block;
}
</style>
