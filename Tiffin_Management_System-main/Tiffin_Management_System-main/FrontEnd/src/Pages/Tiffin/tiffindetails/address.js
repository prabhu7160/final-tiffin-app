import { useEffect, useState } from "react"
import axios from "axios"
import AddLocation from './addlocation'
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Address = () => {
    //const { adr } = props
    const [address, setAddress] = useState([])
    const [addressLine, setAddressLine] = useState('')
    const location = sessionStorage['locationId']
    const navigate = useNavigate();


    
    // const selectArea=()=>{
    //     // sessionStorage.setItem("location",{adr.locationId}); 
    //     // console.log(sessionStorage.getItem("orderId"))
    // }
    const getaddress = () => {
  
        const url = 'http://localhost:8082/deliveryAddress' 
        axios.get(url).then((response) => {
          const result = response.data
          
            setAddress(result.data)
            console.log()
           
         
        })
      }

      const AddAddress = () => {
        const userId= sessionStorage['id']
        if (addressLine.length == 0) {
            alert('please enter Address')
        } else {
            const body = {
              addressLine,
              locationId: location,
              userId
            }
            console.log(`location id ${location}`)
        const url='http://localhost:8082/userAddress/add'
        axios.post(url, body).then((response) => {
            const result = response.data
            
                console.log(result)
                navigate('/showTiffin')
          
        })

      }

    }
    useEffect(()=>{

        getaddress()
      },[])
    return(
        // <div>
        //     <li><a  class="dropdown-item active" onClick={selectArea}>{adr.deliveryArea}</a></li>
            
        // </div>
        <div>
             <div class="row">
          <div class="col" />
          <div class="col">
          <h1 className="title" >Add Address</h1>
    
        <div style={{paddingTop:"30px"}} className="form">

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Addresss
            </label>
            <textarea
              onChange={(e) => {
                    setAddressLine(e.target.value)
              }}
              rows="5"
              className="form-control"
            ></textarea>
          </div>
            

          <div class="dropdown" id="drop">
          <label htmlFor="" className="label-control">
             
            </label>
              <button  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Select Area
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">

              {address.map((adr) => {
                    return (
                      <AddLocation adr={adr}  />
                    )
                })}
                
              </ul>
          </div>


          <div style={{paddingTop:"20px"}} className="mb-3">
            <button  className="btn btn-success" onClick={AddAddress}>
              Add
            </button>
            <Link style={{paddingLeft:30}} to="/showTiffin"><button  className='btn btn-danger float-center'>Back</button></Link>
            {/* <Link to="/" className="btn btn-danger float-end">
              Cancel
            </Link> */}
          </div>

        </div>
          </div>
          <div class="col" />
        </div>
        </div>
    )
}

export default Address