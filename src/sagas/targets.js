import { TARGET_CLICKED, GAME_INCREMENT, GAME_START_REQUESTED, TARGET_CLEARED } from '../constants'
import { takeEvery, put } from 'redux-saga/effects'

function* incrementScore() {
  yield put({ type: GAME_INCREMENT })
}

function* clearTargets() {
  yield put({ type: TARGET_CLEARED }) 
}

export function* targetClickSaga() {
  yield takeEvery(TARGET_CLICKED, () => incrementScore())
}

export function* targetClearSaga() {
  yield takeEvery(GAME_START_REQUESTED, () => clearTargets())
}