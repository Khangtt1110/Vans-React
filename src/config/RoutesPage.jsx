import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Detail from '~/pages/Detail'
import Home from '~/pages/Home'

const RoutesPage = () => {
  return (
    <Routes>
      <Route path='/product/:productId' element={<Detail />} />
      <Route index path='/' element={<Home />} />
    </Routes>
  )
}

export default RoutesPage