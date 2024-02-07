"use client"

import React from 'react'
import NavigationBar from "@/components/NavigationBar"
import HeaderHome from './components/HeaderHome'
import AboutUs from './components/AboutUs'
import CampersListing from '@/app/pages/recruitment/components/CampersListing'
import SuccesStories from './components/SuccesStories'
import Footer from '@/components/Footer'

function Home() {
  return (
    <>
      <NavigationBar />
      <HeaderHome />
      <AboutUs />
      <CampersListing />
      <SuccesStories/>
      <Footer/>
    </>
  )
}

export default Home