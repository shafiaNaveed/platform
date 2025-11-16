import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import UpperSection from './Components/Section/UpperSection'
import LowerSection from './Components/Section/LowerSection'
import Main from './Components/Main/Main'
import Testimonial from './Components/Testimonials/Testimonial'
import Footer from './Components/Footer/Footer.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <UpperSection/>
      <LowerSection/>
      <Main/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App