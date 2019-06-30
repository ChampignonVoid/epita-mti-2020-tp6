import { GAME_START_REQUESTED, GAME_START, TARGET_UPDATED, TIME_INTERVAL, TARGET_CREATED } from '../constants'
import { take, put, select, call } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

const scoreToNbSpawn = (score) => {
  if (score < 5)
    return 1
  if (score < 15)
    return 2
  return 3
}

export default function* gameSaga() {
    while (true) {
      yield take(GAME_START_REQUESTED)
      yield put({ type: GAME_START })
      const current = yield select(state => { return {
        isStarted: state.game.isStarted
      }})
      while (current.isStarted) {
        yield call(delay, TIME_INTERVAL)
        yield put({ type: TARGET_UPDATED })
        const data = yield select(state => { return {
          score: state.game.score
        }})

        yield put({ type: TARGET_CREATED, spawn: scoreToNbSpawn(data.score) })
      }
    }
}