import axios from 'axios'
import CardChampion from 'components/CardChampion/Index'
import { ChampionData } from 'models/champion'
import React, { useEffect, useState } from 'react'

function Champions() {
  useEffect(() => {
    getChampions()
  }, [])

  const [champions, setChampions] = useState<ChampionData[]>([])

  async function getChampions() {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/12.5.1/data/pt_BR/champion.json`
      )
      .then((response) => {
        const championsData = []
        for (const key in response.data.data) {
          championsData.push(response.data.data[key])
        }
        setChampions(championsData)
        console.log(response)
      })
  }
  return (
    <div className="container-xxl">
      <div className="row d-flex p-5" style={{ rowGap: '20px' }}>
        {champions.map((champion, i) => {
          return <CardChampion key={i} props={champion} />
        })}
      </div>
    </div>
  )
}

export default Champions
