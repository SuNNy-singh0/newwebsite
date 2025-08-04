import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import TMFeatures from './TmFeatures'
import HowWeWorkReplica from './HowWeWorkReplica'
import BookingSteps from './BookingSteps'
import Partner from './Partner'
import TownmanorBanner from './TownmanorBanner'
import StayMemories from './StayMemories'




function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <TMFeatures/>
    {/* <HowWeWorkReplica/> */}
    <BookingSteps/>
    {/* <Partner/> */}
    <TownmanorBanner/>
    <StayMemories/>
    </>
  )
}

export default Home