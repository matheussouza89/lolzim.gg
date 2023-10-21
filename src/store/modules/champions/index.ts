import { Reducer } from 'redux'
import { CHAMPIONS, TYPES } from './types'

const INITIAL_STATE: CHAMPIONS = {
  champions: []
}

const reducer: Reducer<CHAMPIONS> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_CHAMPIONS_DATA:
      return {
        ...state,
        champions: action.value
      }
    case TYPES.CLEAN_CHAMPIONS_DATA:
      return {
        ...state,
        champions: INITIAL_STATE.champions
      }
    default:
      return state
  }
}

export default reducer
