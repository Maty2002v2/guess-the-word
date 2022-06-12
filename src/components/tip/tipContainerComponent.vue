<template>
  <div class="tipContainer">
    <tip-icon-component
      v-show="whetherTipIsAvailable"
      :isBlockade="getShowTipFlag"
    ></tip-icon-component>
    <tip-content-block-component
      v-show="getShowTipFlag"
      :tip="getTip"
    ></tip-content-block-component>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";

import { useMainStore } from "@/stores/MainStore";
import { useWordsStore } from "@/stores/WordsStore";

import TipContentBlockComponent from "@/components/tip/TipContentBlockComponent.vue";
import TipIconComponent from "@/components/tip/TipIconComponent.vue";

export default {
  name: "TipContainerComponent",
  components: { TipContentBlockComponent, TipIconComponent },
  setup() {
    const { whetherTipIsAvailable, getShowTipFlag } = storeToRefs(
      useMainStore()
    );

    const { getTip } = storeToRefs(useWordsStore());

    return { whetherTipIsAvailable, getShowTipFlag, getTip };
  },
};
</script>

<style scoped>
.tipContainer {
  max-width: 300px;
  margin: auto;
}
</style>
