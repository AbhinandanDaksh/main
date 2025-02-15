import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TourDetails from '../pages/tourDetails/TourDetails'
import Homepage from '../pages/homepage/HomePage'
import TourCard from '../components/cards/TourCardOne'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TourDetails />}></Route>
        <Route path='/Home' element={<Homepage />}></Route>
        <Route path='/tour-details' element={<TourDetails />}></Route>
        <Route path='/test' element={<TourCard />}></Route>
      </Routes>
    </div>
  )
}
