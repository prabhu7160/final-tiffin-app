import axios from "axios";
import { useState } from "react";
const DeliverboyName=(props)=>{
    const {boys}=props
const {order}=props

    const DeliveryBoy=()=>{
        const url=`http://localhost:8082/daywiseOrder/dispatchOrder`
        const userId=boys.userId
        const do_id=order
        const body = {
            userId,do_id
          }
          
        axios.post(url,body).then((response)=>{
            const result=response.data

            if(result['status']=='success'){
                // navigate('/home')

            }
            else{
                alert(result.error)
                
            }
        })
    }
    return (
        <div>

<li><a class="dropdown-item" onClick={DeliveryBoy}>{boys.userName}</a></li>

                
        </div>
    )
}
export default DeliverboyName
