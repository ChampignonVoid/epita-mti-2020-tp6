import { TARGET_CLICKED, GAME_INCREMENT } from '../constants'
import { takeEvery, put } from 'redux-saga/effects'

function* incrementScore() {
  yield put({type: GAME_INCREMENT})
}

export function* targetClickSaga() {
  yield takeEvery(TARGET_CLICKED, () => incrementScore())
}