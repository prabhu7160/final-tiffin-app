import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { Navigate } from "react-router"
import axios from "axios"
import Address from "./address"
import { toast } from "react-toastify"


const Order = () => {
    const { state } = useLocation()
    const [ name,setName ] = useState('')
    const navigate=useNavigate();
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [totalDays, setTotalDays] = useState("")
    const [totalPrice, setTotalPrice] = useState("")
    const [address, setAddress] = useState([])

    useEffect(()=>{
      const  { tiffin } = state
      setName(tiffin.tiffinName)
      diff()
      getaddress()
    },[endDate])

    const save = () => {
      const userId=sessionStorage['id']
      console.log(userId)
      if(userId==undefined){
        toast.error('please login to place order')
      }
   else   if (startDate.length == 0) {
        alert('please enter start date')
      } else if (endDate.length == 0) {
        alert('please enter end date')
      } else {
        const body = {
          startDate,
          endDate,
          totalDays,
          totalAmount: totalPrice,
          tiffinId: state.tiffin.tiffinId,
          userId 
        }
  
        const url = 'http://localhost:8082/order/AddOrder' 
        axios.post(url, body).then((response) => {
          const result = response.data
          if (result!=null) {
            sessionStorage.setItem("orderId",result.orderId);
            sessionStorage.setItem("totalAmount",result.totalAmount);
            alert("order placed..")
            console.log(result.orderId);
            console.log(result.totalAmount);
            navigate('/payment')
          } else {
            alert("something went wrong..")
          }
        })
      }
    }

    const getaddress = () => {
  
        const url = 'http://localhost:8082/deliveryAddress' 
        axios.get(url).then((response) => {
          const result = response.data
          if (result!=null) {
            setAddress(result)
            console.log(result)
          } else {
            alert("something went wrong..")
          }
        })
      }
    


  const diff=()=>{
    
    var d1 = new Date(startDate);   
    var d2 = new Date(endDate);   
    var diff = d2.getTime() - d1.getTime();   
    var daydiff = diff / (1000 * 60 * 60 * 24);   
    var price=daydiff * (state.tiffin.tiffinPrice);
    setTotalPrice(price)
    setTotalDays(daydiff)
      const days =document.getElementById("totaldays")
      days.innerText=daydiff 
      const pay=document.getElementById("totalprice")
      pay.innerText=price
  }



    return (
        <div class="row">
          <div class="col" />
          <div class="col">
          <h1 style={{alignContent:"center"}} className="title" >Order Details</h1>
    
            <div className="form">
            <div style={{paddingTop:"30px"}} className="mb-3">
                <label htmlFor="" className="label-control">
                Start Date
                </label>
                <input
                onChange={(e) => {
                    setStartDate(e.target.value)
                }}
                type="date"
                className="form-control"/> 
            </div>
                

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              End Date
            </label>
            <input
              onChange={(e) => {
                setEndDate(e.target.value)
              }}
              type="date"
              className="form-control"
              placeholder="YYYY-MM-DD"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Total Days
            </label>
            <h5 id="totaldays" style={{border: '1px solid rgba(0, 0, 0, 0.2)',background:"white", paddingLeft: "15px"}}></h5>
          </div>
          
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Total Price
            </label>
            <h5 id="totalprice" style={{border: '1px solid rgba(0, 0, 0, 0.2)',background:"white", paddingLeft: "15px"}}></h5>
          </div>
{/* 
          <div class="dropdown" id="drop">
          <label htmlFor="" className="label-control">
             
            </label>
              <button  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Address
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">

              {address.map((adr) => {
                    return (
                      <Address adr={adr}  />
                    )
                })} */}
                {/* <li><a class="dropdown-item active" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li> */}
              {/* </ul> */}
          {/* </div> */}
         
           
          <div style={{paddingTop:"50px"}} className="mb-3">
            <button  className="btn btn-success" onClick={save}>
              Add
            </button>
            <Link to="/showTiffin" className="btn btn-danger float-end">
               Cancel
            </Link>
          </div>

        </div>
          </div>
          <div class="col" />

      <div>
  
      </div>

      </div>
        

        
    )
}

export default Order