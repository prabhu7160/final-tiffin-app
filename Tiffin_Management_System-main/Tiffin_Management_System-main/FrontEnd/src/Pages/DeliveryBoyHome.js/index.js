import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DeliveryBoyOrders from "../../Components/DeliveryBoyOrders";
const DeliveryDetails=()=>{
    const [daywiseOrder, setdayWiseorder] = useState([]);
    const fetchOrders=()=>{
        const url = `http://localhost:8082/deliverBoy/orders`;
        const userId=sessionStorage['id']
        const body={
            userId
        }
    axios.post(url,body).then((response) => {
      const result = response.data;
      console.log(`hello`)
      if (result["status"] == "success") {
        setdayWiseorder(result["data"]);
        console.log(result['data'])
      }
    });

    }
    const navigate = useNavigate()
    const Logout=()=>{
      sessionStorage['id'] = null
      console.log(     sessionStorage['id'] )
        sessionStorage['loginStatus'] = null;
        navigate('/signin')
    }
    useEffect(() => {
        fetchOrders();
     
      }, []);
    return (
        <div >
   <nav style={{backgroundColor:"green"}} class="navbar navbar-light bg-light">
  <span class="navbar-text">
  <b>  Delivery Boy Home</b>
  </span>
  <button  type="submit"   onClick={Logout} class="btn btn-danger">Logout</button>
</nav>
     
              <h1 style={{textAlign:"center"}}>Orders List</h1>
            <br/><br/>
              <div class="row">
    <div class="col">
      
    </div>
    <div class="col-10">
        <table class="table  table-dark table-striped">
     

        <thead class="table-primary">
            <th>userName</th>
            <th>user_address</th>
            <th>Area</th>
            <th>City</th>
            <th>Pincode</th>
            <th>OrderId</th>
            <th> Make it Deliver</th>
            </thead>
            <tbody>

        {daywiseOrder.map((order) => {
                      
                      return <DeliveryBoyOrders order={order} />;
                    })}
                    </tbody>
            </table>

    </div>
    <div class="col">
      
    </div>
  </div>

        </div>
    )


}
export default DeliveryDetails;