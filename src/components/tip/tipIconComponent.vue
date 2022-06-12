<template>
  <div>
    <div
      class="icon noselect"
      :class="{ blockade: isBlockade }"
      @click="showATip"
    >
      ? <span class="counterTip">{{ getNumberOfTipsAvailable }}</span>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "tipBoxComponent",
  props: {
    isBlockade: {
      type: Boolean,
    },
  },
  setup(props) {
    const { changeNumberOfTipsAvailable, switchTipFlag } = useMainStore();
    const { getNumberOfTipsAvailable } = storeToRefs(useMainStore());

    function showATip() {
      if (!props.isBlockade) {
        changeNumberOfTipsAvailable(-1);
        switchTipFlag();
      }
    }

    return { getNumberOfTipsAvailable, showATip };
  },
};
</script>

<style scoped>
.icon {
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #42b983;
  margin: 30px auto;
  color: #ffffff;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
}

.blockade {
  opacity: 0.5;
  cursor: default;
}

.counterTip {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2c3e50;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  border: 2px solid #42b983;
}
</style>
