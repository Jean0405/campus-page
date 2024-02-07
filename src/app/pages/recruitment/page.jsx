"use client"

import React from 'react'
import NavigationBar from "@/components/NavigationBar"
import HeaderHome from './components/HeaderHome'
import AboutUs from './components/AboutUs'
import CampersListing from '@/app/pages/recruitment/components/CampersListing'
import SuccesStories from './components/SuccesStories'

function Home() {
  return (
    <>
      <NavigationBar />
      <HeaderHome />
      <AboutUs />
      <CampersListing />
      <SuccesStories/>
    </>
  )
}

export default Home