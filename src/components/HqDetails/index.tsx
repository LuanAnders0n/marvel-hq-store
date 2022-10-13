import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../../services/api'
import { Comic } from '../../utils/types'
import Container from './styled'

const HqDetails: React.FC = props => {
  const params = useParams()

  const [comic, setComic] = useState<Comic | null>(null)

  useEffect(() => {
    api
      .get(`/comics/${params.id}`)
      .then(response => {
        setComic(response.data.data.results[0])
        console.log(response.data.data.results[0])
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <Container>
      <div className="hqs">
        <div className="comic" key={comic?.id}>
          <img
            className="img"
            src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            alt={`foto do ${comic?.title}`}
          />
          <div className="text">
            <h1 className="title">{comic?.title}</h1>
            {comic?.creators.items.map(item => {
              return <h3>{item.name}</h3>
            })}

            <div className="price">
              <span>${comic?.prices[0].price}</span>

              <button className="buy">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HqDetails
