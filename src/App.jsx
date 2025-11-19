import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import UpperSection from './Components/Section/UpperSection'
import LowerSection from './Components/Section/LowerSection'
import Main from './Components/Main/Main'
import Testimonial from './Components/Testimonials/Testimonial'
import Footer from './Components/Footer/Footer'
import Signup from './Components/SingUp/Signup'


const App = () => {
  const [signUp, setSignUp] = useState(false);
  const handleSignUp = () => {
    setSignUp(!signUp);
  };
  return (
    <div>
      <Navbar handleSignUp={handleSignUp}/>
      <Hero/>
      <UpperSection/>
      <LowerSection/>
      <Main/>
      <Testimonial/>
      <Footer/>
      <Signup signUp={signUp} setSignUp={setSignUp} />
    </div>
  )
}

export default App