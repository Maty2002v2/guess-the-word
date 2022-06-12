import { defineStore } from "pinia";

export const useWordsStore = defineStore("Words", {
  state: () => {
    return {
      wordObject: null,
      loading: false,
      error: null,
    };
  },
  getters: {
    getWord: (state) =>
      state.wordObject === null ? "" : state.wordObject.word,
    getCategpry: (state) =>
      state.wordObject === null ? "" : state.wordObject.category,
    getTip: (state) => (state.wordObject === null ? "" : state.wordObject.tip),
  },
  actions: {
    async fetchWord() {
      this.wordObject = null;
      this.loading = true;
      try {
        this.wordObject = await fetch("https://matikster1.ct8.pl/")
          .then((response) => response.json())
          .then((response) => response);
      } catch (error) {
        //random() is prototype with main.js
        this.wordObject = (await import("@/data/words.json")).default.random();
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
