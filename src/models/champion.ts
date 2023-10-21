export interface ChampionData {
  blurb: string
  id: string
  image: {
    full: string
    group: string
    h: number
    sprite: string
    w: number
    x: number
    y: number
  }
  info: {
    attack: number
    defense: number
    difficulty: number
    magic: number
  }
  key: number
  name: string
  partype: string
  stats: {
    armor: number
    armorperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackrange: number
    attackspeed: number
    attackspeedperlevel: number
    crit: number
    critperlevel: number
    hp: number
    hpperlevel: number
    hpregen: number
    hpregenperlevel: number
    movespeed: number
    mp: number
    mpperlevel: number
    mpregen: number
    mpregenperlevel: number
    spellblock: number
    spellblockperlevel: number
  }
  tags: string[]
  title: string
  version: string
}

export interface InfoChampion {
  id: string
  key: string
  name: string
  title: string
  image: {
    full: string
    sprite: string
    group: string
    x: number
    y: number
    w: number
    h: number
  }
  skins: [
    {
      id: number
      num: number
      name: string
      chromas: boolean
    }
  ]
  lore: string
  blurb: string
  allytips: string[]
  enemytips: string[]
  tags: string[]
  partype: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
  stats: {
    hp: number
    hpperlevel: number
    mp: number
    mpperlevel: number
    movespeed: number
    armor: number
    armorperlevel: number
    spellblock: number
    spellblockperlevel: number
    attackrange: number
    hpregen: number
    hpregenperlevel: number
    mpregen: number
    mpregenperlevel: number
    crit: number
    critperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackspeedperlevel: number
    attackspeed: number
  }
  spells: [
    {
      id: string
      name: string
      description: string
      tooltip: string
      leveltip: {
        label: string[]
        effect: string[]
      }
      maxrank: number
      cooldown: number[]
      cooldownBurn: string
      cost: number[]
      costBurn: number
      datavalues: unknown
      effect: null[] | number[]
      effectBurn: null[] | number[]
      vars: unknown[]
      costType: string
      maxammo: number
      range: number[]
      rangeBurn: number
      image: {
        full: string
        sprite: string
        group: string
        x: number
        y: number
        w: number
        h: number
      }
      resource: string
    }
  ]
  passive: {
    name: string
    description: string
    image: {
      full: string
      sprite: string
      group: string
      x: number
      y: number
      w: number
      h: number
    }
  }
  recommended: unknown[]
}
