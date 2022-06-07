<template>
  <div>
    <word-block-component
      :yourTurnFlag="true"
      :word="word"
    ></word-block-component>
    <word-block-component
      :yourTurnFlag="true"
      :word="word"
    ></word-block-component>
  </div>
</template>

<script>
import wordBlockComponent from "./wordBlockComponent.vue";

export default {
  name: "boardGameComponent",
  components: { wordBlockComponent },
  setup() {
    let word = "vue";

    return { word };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
