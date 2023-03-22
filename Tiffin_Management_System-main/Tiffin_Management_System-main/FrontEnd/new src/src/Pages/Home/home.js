import Footcomponent from '../../Components/footer'
import HomeNav from '../../Components/HomeNav'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import Slider from '../../Components/slider'

import './index.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
const Home = () => {
  const [flag, setflag] = useState('')

  const AboutUs = () => {
    setflag('true')
  }
  return (
    <div className='home'>
      <div>
        <HomeNav />
      </div>

      <br />
      <br />
      <Slider />
      {flag === 'true' && <AboutUs />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Footcomponent />
      </div>
    </div>
  )
}

export default Home
