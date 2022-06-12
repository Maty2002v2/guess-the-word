import { defineStore, storeToRefs } from "pinia";
import { watch } from "vue";
import { useMainStore } from "@/stores/MainStore";

export const useGlobalWatchs = defineStore("GlobalWatchs", () => {
  const { getNumberOfTipsAvailable } = storeToRefs(useMainStore());

  watch(
    getNumberOfTipsAvailable,
    (state) => {
      localStorage.setItem("numberOfTip", state);
    },
    { deep: true }
  );
});
