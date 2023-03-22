import axios from "axios";
import { useEffect, useState } from "react";


const DeliveryAddresses=()=>{

    

    const [Address, setAddress] = useState([]);
    const Assignorders=()=>{
        const url=`http://localhost:8082/deliveryAddress`
        axios.get(url).then((response)=>{

            const result=response.data
            if(result['status']=='success'){
                // navigate('/home')
                console.log(result.data)
                setAddress(result["data"]);
            }
            else{
                alert(result.error)
            }
        })
    }

    useEffect(() => {
        Assignorders();
      }, []);
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Delivery Addresses</h2>
            <br/>
            <br/>
            <div className="row">
            <div className="col"></div>
            <div className="col-10">
            <table className="table  table-dark table-striped">
                <thead className="table-primary">
                <th>LocationId</th>
                        <th>DeliveryArea</th>
                        <th>city</th>
                        <th>Pincode</th>
                    </thead>
            
                {Address.map((address)=>{
                   return(
                       
                      <tr >
                    <td >{address.locationId}</td>
                    <td>{address.deliveryArea}</td>
                    <td>{address.city}</td>
                    <td>{address.pinCode}</td>
                    </tr>
                    
                   
                   )
                })}
              </table>
            </div>
            <div className="col"></div>
            </div>
            
        </div>
    )
}
export default DeliveryAddresses