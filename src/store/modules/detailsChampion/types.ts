import { InfoChampion } from 'models/champion'

export enum TYPES {
  SET_DETAILS_CHAMPION = 'SET_DETAILS_CHAMPION',
  CLEAN_DETAILS_CHAMPION = 'CLEAN_DETAILS_CHAMPION'
}

export interface DETAILS_CHAMPION {
  detailsChampion: InfoChampion
}
