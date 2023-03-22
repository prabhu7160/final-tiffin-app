import { useState } from "react"
import Tiffin from './Tiffin'
import axios from 'axios'
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const AdminTiffin=()=>{
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
           <h1 style={{textAlign:"center",color:"white"}}>Tiffins List</h1>
           <Link to="/addtiffin">
            <button type="button" class="btn btn-warning">Add Tiffin</button>
            </Link>
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
            <Link to="/Admin">        <button  style={{width:400}} className="btn btn-warning">  Admin DashBoard </button></Link>
        
        <br/>
        <br/>
        </div>
    )
}
export default AdminTiffin