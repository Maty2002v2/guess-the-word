import { defineStore } from "pinia";

export const useWordsStore = defineStore("Words", {
  state: () => {
    return {
      word: null,
      loading: false,
      error: null,
    };
  },
  actions: {
    async fetchPosts() {
      this.word = null;
      this.loading = true;
      try {
        this.word = await fetch("http://matikster1.ct8.pl").then((response) =>
          response.json()
        );
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
