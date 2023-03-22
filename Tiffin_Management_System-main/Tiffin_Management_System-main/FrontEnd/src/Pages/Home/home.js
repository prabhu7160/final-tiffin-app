import Footer from '../../Components/footer'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Slider from '../../Components/slider'
import Aboutus from '../../Components/aboutus';
import { Link } from 'react-router-dom'
import './index.css'
import { useNavigate } from 'react-router';
import { useState } from 'react';
const Home=()=>{
  const navigate=useNavigate()
  const [flag,setflag] = useState("");
  const Signup=()=>{
    navigate("/Signup")
  }
  const AboutUs=()=>{
    setflag("true")
  }
    return(
    
        <div className="home">
            
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">E-dabba</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

  

      <li className="nav-item">
        <Link className="nav-link " to="/Aboutus">About us</Link>
  </li>   
  <li className="nav-item">
         <Link className="nav-link"  to="/Signin">Signin</Link>
      </li>
    </ul>
    <button  type="submit"  onClick={Signup} class="btn btn-primary">SignUp</button>
  </div>
        
</nav>
<br/>
<br/>
<Slider />
 {flag==="true" && <AboutUs/>}
<br/>
<br/>
<br/>
<br/>
<br/>
<div>
  <Footer />
</div>
        </div>
    )
}

export default Home