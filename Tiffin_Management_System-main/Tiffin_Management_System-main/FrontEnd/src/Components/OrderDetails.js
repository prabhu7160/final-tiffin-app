import axios from "axios";
import { useEffect, useState } from "react";
import DeliveryBoyDropdown from './deliveryboydropdown'
const OrderDetails=(props)=>{
    const {order}=props

    const [DeliveryBoys, setDeliveryBoys] = useState([]);
const GetDeliveryBoys=()=>{
    const url=`http://localhost:8082/daywiseOrder/DeliveryBoysList`
    axios.post(url).then((response)=>{
        const result=response.data
        if(result['status']=='success'){
            // navigate('/home')
      
            setDeliveryBoys(result.data)
        }
        else{
            alert(result.error)
        }
    })
}


    useEffect(() => {
        GetDeliveryBoys();
      }, []);

    return (
        
            <tr>

 <td>{order.userName}</td>
 <td>{order.user_address}</td>
 <td> {order.area}</td>
 <td>{order.city}</td>
 <td>{order.pincode}</td>
 <td> {order.orderId}</td>
 <td> 
     
       
    <div class="dropdown">
    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Delivery List
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  
  {DeliveryBoys.map((boys) => {
        
    return <DeliveryBoyDropdown boys={boys} order={order.do_id} />

})}
  


  
   
   
     
    </ul>
  </div>  
       
    
     



 </td>
        </tr>
        
       
    )
}

export default OrderDetails