import { ChampionData } from 'models/champion'
import store from '../..'
import { TYPES } from './types'

export const setChampionsData = (value: ChampionData) =>
  store.dispatch({
    type: TYPES.SET_CHAMPIONS_DATA,
    value
  })

export const cleanChampionsData = () =>
  store.dispatch({
    type: TYPES.CLEAN_CHAMPIONS_DATA
  })
