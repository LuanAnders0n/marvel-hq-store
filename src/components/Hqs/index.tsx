import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Comic } from '../../utils/types'

import Container from './styled'

const Hqs: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([])

  useEffect(() => {
    api
      .get(`/comics?&startYear=2018&limit=48`)
      .then(response => {
        setComics(response.data.data.results)
        console.log(response.data.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <Container>
      <div className="hqs">
        {comics.map(comics => {
          return (
            <Link className="link" to={`/comic/${comics.id}`}>
              <li className="comic" key={comics.id}>
                <img
                  className="img"
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  alt={`foto do ${comics.title}`}
                />
                <div className="title">
                  <span className="name">{comics.title}</span>
                </div>
                <button className="buy">Buy</button>
              </li>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default Hqs
