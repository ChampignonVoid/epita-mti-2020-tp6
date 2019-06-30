import { GAME_START, GAME_INCREMENT, GAME_START_REQUESTED, TIME_INTERVAL, GAME_PENALITY } from "../constants";

const comboToMultiplier = 3

const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false,
  combo: 0,
  isEnded: false
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case GAME_START_REQUESTED:
      const newTimeInterval = action.timeInterval ? action.timeInterval : TIME_INTERVAL
      return {
        ...defaultState,
        timeInterval: newTimeInterval
      }
    case GAME_START:
      return {
        ...state,
        isStarted: true
      };
    case GAME_INCREMENT:
      const scoreMultiplier = Math.pow(2, Math.floor(state.combo / comboToMultiplier))
      return {
        ...state,
        score: state.score + 1 * scoreMultiplier,
        combo: state.combo + 1
      }
    case GAME_PENALITY:
      const lives = state.lives - action.count < 0 ? 0 : state.lives - action.count
      const isEnded = lives === 0
      return {
        ...state,
        lives,
        combo: 0,
        isEnded
      }
    default:
      return state;
  }
};

export default game;
