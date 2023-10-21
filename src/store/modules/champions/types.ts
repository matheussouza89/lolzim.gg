import { ChampionData } from 'models/champion'

export enum TYPES {
  SET_CHAMPIONS_DATA = 'SET_CHAMPIONS_DATA',
  CLEAN_CHAMPIONS_DATA = 'CLEAN_CHAMPIONS_DATA'
}

export interface CHAMPIONS {
  champions: ChampionData[]
}
