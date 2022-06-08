<template>
  <button :class="[win ? 'winButton' : 'lostButotn']">Jeszcze raz</button>
</template>

<script>
export default {
  name: "buttonRestartGame",
  props: {
    win: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 5px;
}

.winButton {
  color: #2c3e50;
  background: #42b983;
}

.lostButotn {
  color: #2c3e50;
  background: #c6c4c4;
}
</style>
