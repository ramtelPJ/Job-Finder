import React from 'react'
import Navbar from './shared/navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './Footer'
import useGetAllJobs from '../hooks/useGetAllJobs'
function Home() {
  useGetAllJobs();
  return (
    <div>
<Navbar />
<HeroSection/>

<CategoryCarousel/>

<LatestJob/>

<Footer/>
    </div>
  )
}

export default Home