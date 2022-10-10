import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import Container from './styles'

interface ResponseData {
  id: string
  title: string
  description: string
  creators: string
  thumbnail: {
    path: string
    extension: string
  }
}

const Hqs: React.FC = () => {
  const [comics, setComics] = useState<ResponseData[]>([])

  useEffect(() => {
    api
      .get(`/comics?&startYear=2018&limit=30`)
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
            <Link to={`comic/${comics.id}`}>
              <div key={comics.id}>
                <img
                  className="img"
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  alt={`foto do ${comics.title}`}
                />
                <span className="name">{comics.title}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default Hqs
