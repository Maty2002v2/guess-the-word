<template>
  <boardGameComponent />
</template>

<script>
import "@/styles/globalStyles.css";
import boardGameComponent from "./components/boardGameComponent.vue";

export default {
  name: "App",
  components: {
    boardGameComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
