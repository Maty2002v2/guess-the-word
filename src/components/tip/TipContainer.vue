<template>
  <div class="tipContainer">
    <tip-icon
      v-show="whetherTipIsAvailable"
      :isBlockade="getShowTipFlag"
    ></tip-icon>
    <tip-content-block
      v-show="getShowTipFlag"
      :tip="getTip"
    ></tip-content-block>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";

import { useMainStore } from "@/stores/MainStore";
import { useWordsStore } from "@/stores/WordsStore";

import TipContentBlock from "@/components/tip/TipContentBlock.vue";
import TipIcon from "@/components/tip/TipIcon.vue";

export default {
  name: "TipContainerComponent",
  components: { TipContentBlock, TipIcon },
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
