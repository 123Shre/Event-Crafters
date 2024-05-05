import React from 'react'
import Slider from './Carousal/Slider'
import Footer from './Footer/Footer'
import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default LandingPage
