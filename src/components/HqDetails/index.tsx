import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../services/api'

// import { Container } from './styles';

const HqDetails = () => {
  const [comic, setComic] = useState<any>([])
  const params = useParams()

  useEffect(() => {
    api
      .get(`/comics/${params.id}`)
      .then(response => {
        setComic(response.data.data.results)
        console.log(response.data.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return <div />
}

export default HqDetails
