import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AiTools from '../Components/AiTools'
import Testimonial from '../Components/Testimonial'
import Billing from '../Components/Billing'
import { PricingTable } from '@clerk/clerk-react'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Billing />
      <Footer />
    </div>
  )
}

export default Home
