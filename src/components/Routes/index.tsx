import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Shopping from '../../Pages/shopping'
import Store from '../../Pages/Store'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="store" element={<Store />} />
      <Route path="shopping" element={<Shopping />} />
    </Routes>
  )
}

export default RoutesComponent
