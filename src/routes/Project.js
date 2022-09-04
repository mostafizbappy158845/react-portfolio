import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2/HeroImg2'
import Navbar from '../components/Navbar/Navbar'
import PricingCard from '../components/PricingCard/PricingCard'
// import WorkCard from '../components/WorkCard/WorkCard'
import Work from '../components/Work/Work'


const Project = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="PROJECTS"  text="Some of my most recent works."/>
        <Work/>
        <PricingCard/>
        <Footer/>
    </div>
  )
}

export default Project