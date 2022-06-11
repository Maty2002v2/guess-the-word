import { defineStore } from "pinia";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      heart: 1,
      finishedGame: false,
      winningGame: false,
      numberOfTipsAvailable: 3,
      showTipFlag: false,
    };
  },
  getters: {
    getFinishGame: (state) => state.finishedGame,
    getGameResult: (state) => state.winningGame,
    getNumberOfTipsAvailable: (state) => state.numberOfTipsAvailable,
    getShowTipFlag: (state) => state.showTipFlag,
    whetherTipIsAvailable() {
      return !this.getFinishGame && this.getNumberOfTipsAvailable > 0;
    },
  },
  actions: {
    finishGame() {
      this.finishedGame = true;
      this.showTipFlag = false;
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
      this.showTipFlag = false;
    },
    changeNumberOfTipsAvailable(number) {
      this.numberOfTipsAvailable + number >= 0
        ? (this.numberOfTipsAvailable += number)
        : "";
    },
    switchTipFlag() {
      this.showTipFlag = !this.showTipFlag;
    },
  },
});
