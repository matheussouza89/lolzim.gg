import { combineReducers } from 'redux'
import champions from './champions'
import detailsChampion from './detailsChampion'

export default combineReducers({
  champions,
  detailsChampion
})
