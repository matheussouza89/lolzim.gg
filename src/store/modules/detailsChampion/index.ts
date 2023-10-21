import { Reducer } from 'redux'
import { DETAILS_CHAMPION, TYPES } from './types'

const INITIAL_STATE: DETAILS_CHAMPION = {
  detailsChampion: {
    id: '',
    key: '',
    name: '',
    title: '',
    image: {
      full: '',
      sprite: '',
      group: '',
      x: 0,
      y: 0,
      w: 0,
      h: 0
    },
    skins: [
      {
        id: 0,
        num: 0,
        name: '',
        chromas: false
      }
    ],
    lore: '',
    blurb: '',
    allytips: [],
    enemytips: [],
    tags: [],
    partype: '',
    info: {
      attack: 0,
      defense: 0,
      magic: 0,
      difficulty: 0
    },
    stats: {
      hp: 0,
      hpperlevel: 0,
      mp: 0,
      mpperlevel: 0,
      movespeed: 0,
      armor: 0,
      armorperlevel: 0,
      spellblock: 0,
      spellblockperlevel: 0,
      attackrange: 0,
      hpregen: 0,
      hpregenperlevel: 0,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 0,
      attackdamageperlevel: 0,
      attackspeedperlevel: 0,
      attackspeed: 0
    },
    spells: [
      {
        id: '',
        name: '',
        description: '',
        tooltip: '',
        leveltip: {
          label: [],
          effect: []
        },
        maxrank: 0,
        cooldown: [],
        cooldownBurn: '',
        cost: [],
        costBurn: 0,
        datavalues: {},
        effect: [],
        effectBurn: [],
        vars: [],
        costType: '',
        maxammo: 0,
        range: [],
        rangeBurn: 0,
        image: {
          full: '',
          sprite: '',
          group: '',
          x: 0,
          y: 0,
          w: 0,
          h: 0
        },
        resource: ''
      }
    ],
    passive: {
      name: '',
      description: '',
      image: {
        full: '',
        sprite: '',
        group: '',
        x: 0,
        y: 0,
        w: 0,
        h: 0
      }
    },
    recommended: []
  }
}

const reducer: Reducer<DETAILS_CHAMPION> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_DETAILS_CHAMPION:
      return {
        ...state,
        detailsChampion: action.value
      }
    case TYPES.CLEAN_DETAILS_CHAMPION:
      return {
        ...state,
        detailsChampion: INITIAL_STATE.detailsChampion
      }
    default:
      return state
  }
}

export default reducer
