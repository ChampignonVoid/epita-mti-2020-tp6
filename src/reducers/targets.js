import { TARGET_CLICKED, TARGET_UPDATED, TARGET_CREATED } from "../constants";

let id = 0

const defaultState = {
  targets: [{ id: ++id, x: 50, y: 30, value: 5 }]
}

const createTarget = () => {
  const x = Math.floor(Math.random() * 90)
  const y = Math.floor(Math.random() * 90)
  return { id: ++id, x, y, value: 5 }
}

const target = (target, action) => {
  switch (action.type) {
    case TARGET_UPDATED:
      return {
        ...target,
        value: target.value - 1
      }
    default:
      return target;
  }
}

const targets = (state = defaultState, action) => {
  switch (action.type) {
    case TARGET_CLICKED:
      return {
        ...state,
        targets: state.targets.filter(t => t.id !== action.id)
      }
    case TARGET_UPDATED:
      return {
        ...state,
        targets: state.targets.map(t => target(t, action))
      }
    case TARGET_CREATED:
      const targets = state.targets.map(t => target(t, action))
      for (let i = 0 ; i < action.spawn ; ++i)
        targets.push(createTarget())
      return {
        ...state,
        targets: targets
      }
    default:
      return state;
  }
};

export default targets