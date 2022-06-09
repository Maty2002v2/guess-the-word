import { defineStore } from "pinia";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      heart: 1,
      finishedGame: false,
      winningGame: false,
    };
  },
  getters: {
    getFinishGame: (state) => state.finishedGame,
    getGameResult: (state) => state.winningGame,
  },
  actions: {
    changeFinishGame() {
      this.finishedGame = true;
    },
    /* win = true | lose = false */ //pozadnie opisac metody (dokumentacja)
    changeGameResult(result) {
      this.winningGame = result;
    },
  },
});
