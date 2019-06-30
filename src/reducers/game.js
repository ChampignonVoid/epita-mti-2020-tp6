import { GAME_START, GAME_INCREMENT } from "../constants";

const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        isStarted: true
      };
    case GAME_INCREMENT:
      return {
        ...state,
        score: state.score + 1
      }
    default:
      return state;
  }
};

export default game;
