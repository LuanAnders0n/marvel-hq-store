import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../services/api'

// import { Container } from './styles';

interface hq {
  id: string
  title: string
  description: string
  creators: string
  thumbnail: {
    path: string
    extension: string
  }
  prices: string
}

const Hqdetails = () => {
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

  useEffect(() => {
    console.log(params)
  }, [])

  return <div />
}

export default Hqdetails
