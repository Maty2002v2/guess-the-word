<template>
  <div class="tipContainer">
    <tip-icon-component></tip-icon-component>
    <tip-content-block-component></tip-content-block-component>
  </div>
</template>

<script>
import TipContentBlockComponent from "./tipContentBlockComponent.vue";
import tipIconComponent from "./tipIconComponent.vue";

export default {
  components: { tipIconComponent, TipContentBlockComponent },
  name: "tipContainerComponent",
};
</script>

<style scoped>
.tipContainer {
  margin: auto;
  max-width: 300px;
}
</style>
