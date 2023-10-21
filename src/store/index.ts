import { createStore, Store } from 'redux'
import rootReducer from './modules/rootReducer'
import { CHAMPIONS } from './modules/champions/types'
import { DETAILS_CHAMPION } from './modules/detailsChampion/types'

export interface ApplicationState {
  champions: CHAMPIONS
  detailsChampion: DETAILS_CHAMPION
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
