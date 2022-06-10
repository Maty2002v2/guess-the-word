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
  },
  actions: {
    //http://matikster1.ct8.pl
    async fetchWord() {
      this.wordObject = null;
      this.loading = true;
      try {
        this.wordObject = await fetch("http://matikster1.ct8.pl")
          .then((response) => response.json())
          .then((response) => response);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
