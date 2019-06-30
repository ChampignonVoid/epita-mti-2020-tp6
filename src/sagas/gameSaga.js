import { GAME_START_REQUESTED, GAME_START, TARGET_UPDATED, TARGET_CREATED, TARGET_DELETED, GAME_PENALITY } from '../constants'
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
        isStarted: state.game.isStarted,
        timeInterval: state.game.timeInterval
      }})

      while (current.isStarted) {
        yield call(delay, current.timeInterval)
        yield put({ type: TARGET_UPDATED })
        const data = yield select(state => { return {
          score: state.game.score,
          targets: state.targets.targets.filter(t => t.value <= 0)
                                        .map(t => t.id)
        }})

        if (data.targets.length > 0) {
          yield put({ type: TARGET_DELETED, targets: data.targets })
          yield put({ type: GAME_PENALITY, count: data.targets.length })
        }
        
        yield put({ type: TARGET_CREATED, spawn: scoreToNbSpawn(data.score) })

        const newCurrent = yield select(state => { return {
          isStarted: state.game.isStarted
        }})
        current.isStarted = newCurrent.isStarted
      }
    }
}