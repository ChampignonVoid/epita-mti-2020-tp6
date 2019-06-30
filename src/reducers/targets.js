import { TARGET_CLICKED, TARGET_UPDATED, TARGET_CREATED, TARGET_DELETED, TARGET_CLEARED } from "../constants";

let id = 0

const maxColor = 16777215
const minColor = 16711680
const defaultValue = 5

const defaultState = {
  targets: [{ id: ++id, x: 50, y: 30, value: defaultValue, bgColor: maxColor }]
}

const getColorFromValue = (value) => {
  return Math.floor(maxColor - (defaultValue - value) * (maxColor - minColor) / defaultValue)
}

const createTarget = () => {
  const x = Math.floor(Math.random() * 80)
  const y = Math.floor(Math.random() * 80)
  return { id: ++id, x, y, value: defaultValue, bgColor: getColorFromValue(defaultValue) }
}

const target = (target, action) => {
  switch (action.type) {
    case TARGET_UPDATED:
      const color = getColorFromValue(target.value - 1)
      console.log(color)
      return {
        ...target,
        value: target.value - 1,
        bgColor: color
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
    case TARGET_DELETED:
      return {
        ...state,
        targets: state.targets.filter(t => !action.targets.includes(t.id))
      }
    case TARGET_CLEARED:
      return {
        ...state,
        targets: defaultState.targets
      }
    default:
      return state;
  }
};

export default targets