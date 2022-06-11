<template>
  <div>
    <div class="icon noselect" @click="showATip">
      ? <span class="counterTip">{{ getNumberOfTipsAvailable }}</span>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useWordsStore } from "@/stores/WordsStore";
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "tipBoxComponent",
  setup() {
    const { changeNumberOfTipsAvailable } = useMainStore();
    const { getNumberOfTipsAvailable } = storeToRefs(useMainStore());

    const { getTip } = storeToRefs(useWordsStore());

    function showATip() {
      changeNumberOfTipsAvailable(-1);
    }

    return { getTip, getNumberOfTipsAvailable, showATip };
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
