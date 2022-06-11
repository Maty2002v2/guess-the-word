import { defineStore } from "pinia";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      heart: 1,
      finishedGame: false,
      winningGame: false,
      numberOfTipsAvailable: 3,
    };
  },
  getters: {
    getFinishGame: (state) => state.finishedGame,
    getGameResult: (state) => state.winningGame,
    getNumberOfTipsAvailable: (state) => state.numberOfTipsAvailable,
  },
  actions: {
    finishGame() {
      this.finishedGame = true;
    },
    /* win = true | lose = false */ //pozadnie opisac metody (dokumentacja)
    changeGameResult(result) {
      if (result) {
        this.changeNumberOfTipsAvailable(1);
      }
      this.winningGame = result;
    },
    restartGame() {
      this.finishedGame = false;
      this.winningGame = false;
    },
    changeNumberOfTipsAvailable(number) {
      this.numberOfTipsAvailable + number >= 0
        ? (this.numberOfTipsAvailable += number)
        : "";
    },
  },
});
