import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { Navigate, useNavigate } from "react-router"
import { Link } from "react-router-dom"

const AdminDeliveryManagement=()=>{
    const [delivery_area,setDeliveryarea]=useState('')
    const [city,setCity]=useState('')
    const [pincode,setpincode]=useState(0)
    
const navigate=useNavigate()
    const addAddress=()=>{
        const body={
            deliveryArea:delivery_area,
            city,pinCode:pincode
        }
        const url=`http://localhost:8082/deliveryAddress/add`
        axios.post(url,body).then((response) => {
            const result = response.data
            

              toast.success("Delivery Address Added Succesfully")
             navigate('/Admin')
           
          })
        
    }
    return(
        <div>
            
            
            <Link class="nav-link " to ="/AddressList">
                <button className="btn btn-warning">
Delivery Address List</button>
              </Link>
            
            <h1 style={{textAlign:"center"}}>Add Delivery Address</h1>
            
            <br/>
            <br/>
            <div className="row">
            <div className="col"></div>
            <div className="col">
            <div className="mb-3">
            <label htmlFor="" className="label-control">
              Delivery Address
            </label>
            <textarea
              onChange={(e) => {
                    setDeliveryarea(e.target.value)
              }}
              rows="5"
              className="form-control"
            ></textarea>
            <br/>
            <br/>
             <label htmlFor="" className="label-control">
              City
            </label>
            <br/>
            <input onChange={(e) => {
                    setCity(e.target.value)
              }} type="text"/>
              <br/>
              <br/>
               <label htmlFor="" className="label-control">
              Pincode
            </label>
            <br/>
            <input onChange={(e) => {
                    setpincode(e.target.value)
              }} type="number"/>
<br/>
<br/>
            <button onClick={addAddress} className="btn btn-success" >Add Address</button>
          </div>
            </div>
            <div className="col"></div>
            </div>
     
        </div>
    )
}
export default AdminDeliveryManagement