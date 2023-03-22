import axios from "axios";
import { useEffect, useState } from "react";
const DeliveryBoyOrders=(props)=>{
    const {order}=props
   
    const Delivered=()=>{
      
        const do_id=order.do_id
        const body={
            do_id
        }
        const url = `http://localhost:8082/deliveryBoy/Delivered`;
    axios.post(url,body).then((response) => {
      const result = response.data;
      console.log(`hello`)
      if (result["status"] == "success") {
        // setdayWiseorder(result["data"]);
        console.log(result['data'])
      }
    });
    }
    return(
        <tr>

        <td>{order.userName}</td>
        <td>{order.user_address}</td>
        <td> {order.area}</td>
        <td>{order.city}</td>
        <td>{order.pincode}</td>
        <td> {order.orderId}</td>
        <td> 
            <button class="btn btn-warning" onClick={Delivered} >Deliver Orders</button>
    
    </td>
        </tr>
    )
  
}
export default DeliveryBoyOrders