import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ApplicationState } from 'store'
import { setDetailsChampion } from 'store/modules/detailsChampion/actions'
import { DETAILS_CHAMPION } from 'store/modules/detailsChampion/types'
import { Details } from './style'

function DetailsChampion() {
  const { idChampion } = useParams()

  const { detailsChampion } = useSelector<ApplicationState, DETAILS_CHAMPION>(
    (state) => state.detailsChampion
  )

  const getInfoChampion = useCallback((idChampion: string | undefined) => {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/12.5.1/data/pt_BR/champion/${capitalize(
          idChampion
        )}.json`
      )
      .then((response) => {
        for (const key in response.data.data) {
          setDetailsChampion(response.data.data[key])
        }
      })
  }, [])

  useEffect(() => {
    getInfoChampion(idChampion)
  }, [getInfoChampion, idChampion])

  function capitalize(string: string | undefined) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return string
  }
  return (
    <Details
      backgroundImage={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${capitalize(
        idChampion
      )}_0.jpg`}
    >
      <div className="champ-img">
        {/* <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${capitalize(
            idChampion
          )}_0.jpg`}
        /> */}
      </div>
      <div className="d-flex flex-wrap">
        <div
          style={{ width: '300px' }}
          id="carouselExampleIndicators"
          className="carousel slide m-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {detailsChampion.skins.map((skin, i) => {
              return (
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? 'active' : ''}`}
                >
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${capitalize(
                      idChampion
                    )}_${skin.num}.jpg`}
                    className="d-block w-100"
                    alt={skin.name}
                  />
                </div>
              )
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Details>
  )
}

export default DetailsChampion
