import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Store from '../../Pages/Store'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Store" element={<Store />} />
    </Routes>
  )
}

export default RoutesComponent
