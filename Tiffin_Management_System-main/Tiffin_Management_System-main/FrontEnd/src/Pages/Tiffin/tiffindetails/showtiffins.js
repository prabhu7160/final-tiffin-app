import { useState } from "react"
import Tiffin from './tiffin'
import axios from 'axios'
import { useEffect } from "react"
import { useNavigate } from "react-router"



const ShowTiffins = () => {

    const [tiffins, setTiffins]=useState([])

    const searchTiffins = () => {
        const url = 'http://localhost:8082/tiffin/details'
        axios.get(url).then((response) => {
          const result = response.data
          setTiffins(result['data'])
          console.log(tiffins)
          // if (result!=null) {
          //   setTiffins(result)
            
          // } else {
          //   alert('something went wrong..')
          // }
        })
      }
      const navigate=useNavigate()
      const Logout=()=>{
        sessionStorage['id'] = null
        console.log(     sessionStorage['id'] )
          sessionStorage['loginStatus'] = null;
          navigate('/signin')
      }
    useEffect(() => {
        searchTiffins()
        console.log('getting called')
    }, [])

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/address" style={{fontWeight:"bold"}}> Foodies</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/address">Add Address </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="/userProfile">Edit profile </a>
                  </li>
                </ul>
              </div>
              <button  type="submit"   onClick={Logout} class="btn btn-danger">Logout</button>
            </nav>

            <div className="row" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div className="col">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                {tiffins.map((tiffin) => {
                  console.log(tiffin)
                    return (
 
                    <div class="col"> 
                    <Tiffin tiffin={tiffin}  />
                    </div>
                    )
                })}
                </div> 
                 
                </div>
            </div>
        </div>
    )
}

export default ShowTiffins